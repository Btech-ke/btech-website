const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ═══════════════════════════════════════════════════════════════════════════════════
// DARAJA API CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════════════

const DARAJA_CONFIG = {
    consumer_key: process.env.MPESA_CONSUMER_KEY || "E3cG7LXo4QSygC1akqksgxEiucVJ6oAdsZ0NrmdkBQrqah2b",
    consumer_secret: process.env.MPESA_CONSUMER_SECRET || "EiTXMPwDO4jaKnXaw22VkDGysTDtmC3GRqxgYkgulLr7vGG4w2zOpFyUWujLAC0z",
    business_short_code: process.env.MPESA_SHORT_CODE || "174379", // Sandbox test code
    passkey: process.env.MPESA_PASSKEY || "bfb279f9aa9bdbcf158e97dd1a503b6064e3f3e49db3e1496d9624c8adc61f15", // Sandbox test passkey
    auth_url: "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
    mpesa_url: "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
    query_url: "https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query",
    callback_url: process.env.CALLBACK_URL || "http://localhost:3000/api/callback"
};

// ═══════════════════════════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════════

/**
 * Generate OAuth token for Daraja API
 */
async function getAccessToken() {
    try {
        const auth = Buffer.from(
            `${DARAJA_CONFIG.consumer_key}:${DARAJA_CONFIG.consumer_secret}`
        ).toString('base64');

        const response = await axios.get(DARAJA_CONFIG.auth_url, {
            headers: {
                Authorization: `Basic ${auth}`
            }
        });

        return response.data.access_token;
    } catch (error) {
        console.error('Error getting access token:', error.response?.data || error.message);
        throw new Error('Failed to authenticate with Daraja API');
    }
}

/**
 * Generate STK Push request (prompts M-Pesa on user's phone)
 */
async function initiateStkPush(phone, amount, orderId) {
    try {
        const token = await getAccessToken();
        
        // Format phone number: remove leading 0, add 254
        let formattedPhone = phone.replace(/\D/g, '');
        if (formattedPhone.startsWith('0')) {
            formattedPhone = '254' + formattedPhone.substring(1);
        } else if (formattedPhone.startsWith('7')) {
            formattedPhone = '254' + formattedPhone;
        } else if (!formattedPhone.startsWith('254')) {
            formattedPhone = '254' + formattedPhone;
        }

        // Generate timestamp
        const timestamp = new Date().toISOString().replace(/[-:Z]/g, '').slice(0, 14);

        // Generate password
        const datastring = DARAJA_CONFIG.business_short_code + DARAJA_CONFIG.passkey + timestamp;
        const password = Buffer.from(datastring).toString('base64');

        const payload = {
            BusinessShortCode: DARAJA_CONFIG.business_short_code,
            Password: password,
            Timestamp: timestamp,
            TransactionType: "CustomerPaymentRequest",
            Amount: Math.floor(amount), // Must be integer
            PartyA: formattedPhone,
            PartyB: DARAJA_CONFIG.business_short_code,
            PhoneNumber: formattedPhone,
            CallBackURL: DARAJA_CONFIG.callback_url,
            AccountReference: orderId,
            TransactionDesc: `BTECH PLUS Order ${orderId}`
        };

        console.log('STK Push Payload:', payload);

        const response = await axios.post(DARAJA_CONFIG.mpesa_url, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('STK Push Response:', response.data);

        return {
            success: true,
            checkoutRequestID: response.data.CheckoutRequestID,
            responseCode: response.data.ResponseCode,
            message: response.data.ResponseDescription,
            customerMessage: response.data.CustomerMessage || "Check your phone for M-Pesa prompt"
        };
    } catch (error) {
        console.error('STK Push Error:', error.response?.data || error.message);
        return {
            success: false,
            message: error.response?.data?.errorMessage || error.message,
            error: error.response?.data || error.message
        };
    }
}

/**
 * Query payment status
 */
async function queryPaymentStatus(checkoutRequestID) {
    try {
        const token = await getAccessToken();
        const timestamp = new Date().toISOString().replace(/[-:Z]/g, '').slice(0, 14);

        const datastring = DARAJA_CONFIG.business_short_code + DARAJA_CONFIG.passkey + timestamp;
        const password = Buffer.from(datastring).toString('base64');

        const payload = {
            BusinessShortCode: DARAJA_CONFIG.business_short_code,
            Password: password,
            Timestamp: timestamp,
            CheckoutRequestID: checkoutRequestID
        };

        const response = await axios.post(DARAJA_CONFIG.query_url, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        return {
            success: response.data.ResultCode === '0',
            resultCode: response.data.ResultCode,
            resultDescription: response.data.ResultDescription,
            data: response.data
        };
    } catch (error) {
        console.error('Query Error:', error.response?.data || error.message);
        return {
            success: false,
            message: error.message
        };
    }
}

// ═══════════════════════════════════════════════════════════════════════════════════
// API ENDPOINTS
// ═══════════════════════════════════════════════════════════════════════════════════

/**
 * POST /api/initiate-payment
 * Initiates M-Pesa STK push
 */
app.post('/api/initiate-payment', async (req, res) => {
    try {
        const { phone, amount, orderId } = req.body;

        // Validate inputs
        if (!phone || !amount || !orderId) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields: phone, amount, orderId'
            });
        }

        if (amount < 1) {
            return res.status(400).json({
                success: false,
                message: 'Amount must be at least KES 1'
            });
        }

        const result = await initiateStkPush(phone, amount, orderId);
        return res.json(result);
    } catch (error) {
        console.error('Initiate Payment Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Server error: ' + error.message
        });
    }
});

/**
 * POST /api/query-payment
 * Queries payment status
 */
app.post('/api/query-payment', async (req, res) => {
    try {
        const { checkoutRequestID } = req.body;

        if (!checkoutRequestID) {
            return res.status(400).json({
                success: false,
                message: 'Missing checkoutRequestID'
            });
        }

        const result = await queryPaymentStatus(checkoutRequestID);
        return res.json(result);
    } catch (error) {
        console.error('Query Payment Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Server error: ' + error.message
        });
    }
});

/**
 * POST /api/callback
 * M-Pesa callback endpoint (Safaricom sends payment confirmation here)
 */
app.post('/api/callback', (req, res) => {
    console.log('=== M-PESA CALLBACK RECEIVED ===');
    console.log(JSON.stringify(req.body, null, 2));

    // Process the callback
    const body = req.body.Body.stkCallback;
    const resultCode = body.ResultCode;
    const resultDescription = body.ResultDescription;
    const checkoutRequestID = body.CheckoutRequestID;
    const merchantRequestID = body.MerchantRequestID;

    // Save callback data (in production, save to database)
    const callbackData = {
        timestamp: new Date(),
        checkoutRequestID,
        merchantRequestID,
        resultCode,
        resultDescription,
        callbackMetadata: body.CallbackMetadata
    };

    console.log('Callback Data:', callbackData);

    // Always respond with 200 to acknowledge receipt
    res.status(200).json({
        success: true,
        message: 'Callback received'
    });
});

/**
 * GET /api/health
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'M-Pesa backend is running',
        sandbox: true
    });
});

/**
 * GET /api/config
 * Returns safe configuration info (no secrets)
 */
app.get('/api/config', (req, res) => {
    res.json({
        businessCode: DARAJA_CONFIG.business_short_code,
        environment: 'sandbox'
    });
});

// ═══════════════════════════════════════════════════════════════════════════════════
// SERVER
// ═══════════════════════════════════════════════════════════════════════════════════

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`\n
╔════════════════════════════════════════════════════════════╗
║     M-PESA DARAJA API INTEGRATION SERVER                   ║
║     Running on http://localhost:${PORT}                    ║
║     Environment: SANDBOX                                   ║
║     Business Code: ${DARAJA_CONFIG.business_short_code}                           ║
╚════════════════════════════════════════════════════════════╝
    `);
});

module.exports = app;
