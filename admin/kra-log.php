<?php
$logFile = '../kra-submissions.json';

// Handle POST request: add a new submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $entry = [
        'full_name'  => $_POST['full_name'] ?? '',
        'email'      => $_POST['email'] ?? '',
        'phone'      => $_POST['phone'] ?? '',
        'kra_pin'    => $_POST['kra_pin'] ?? '',
        'id_number'  => $_POST['id_number'] ?? '',
        'notes'      => $_POST['notes'] ?? '',
        'date'       => date('Y-m-d H:i:s')
    ];

    // Load existing submissions
    $submissions = file_exists($logFile) ? json_decode(file_get_contents($logFile), true) : [];

    // Fallback if decoding fails
    if (!is_array($submissions)) {
        $submissions = [];
    }

    // Append new entry
    $submissions[] = $entry;

    // Save back to file with locking to prevent race conditions
    file_put_contents($logFile, json_encode($submissions, JSON_PRETTY_PRINT), LOCK_EX);

    echo "Success";
    exit;
}

// Handle GET request: return submissions as JSON
header('Content-Type: application/json');
if (file_exists($logFile)) {
    echo file_get_contents($logFile);
} else {
    echo json_encode([]);
}
?>
