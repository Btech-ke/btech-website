/* =====================================================================
   GOD'S LAST APPEAL CHURCH - CONTENT FILE
   Edit this file on GitHub (pencil icon) to change the website content.
   Photos live in the /images folder: image1.jpg ... image20.jpg (see INSTRUCTIONS.md)
   Keep every quote ' and comma , exactly as shown.
   ===================================================================== */

/* ---------- SERMONS ----------
   ['Title','Category','VIDEO','photo','Date']
   VIDEO can be: a YouTube ID (the 11 letters after v= ), a Facebook video link,
   or a file like 'videos/sermon1.mp4'. Leave '' if there is no video yet. */
/* ---------- ADMIN SYSTEM (Firebase) ---------- fill these 4 values once, see ADMIN-SETUP.md. Leave empty to keep using the content below. */
var FIREBASE_CONFIG={apiKey:'AIzaSyBKmlgE0pbulfP4ean3aKOz3g2hZozRhMg',authDomain:'god-s-last-appeal-church.firebaseapp.com',projectId:'god-s-last-appeal-church',appId:'1:636180415800:web:f3edb0dc0b16d6dbb9adcd'};

var YT='#';/* paste your YouTube channel link between the quotes */
var SER=[
['Sabbath Service: Latest Message','Sabbath','','https://images.unsplash.com/photo-1507692049790-de58290a4334?w=640&h=360&fit=crop'],
['Healing & Prayer Night','Healing','','https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=640&h=360&fit=crop'],
['Deep Bible Study','Bible Study','','https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=640&h=360&fit=crop'],
['Youth Fellowship Message','Youth','','https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=640&h=360&fit=crop'],
['Sabbath Worship & Praise','Sabbath','','https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=640&h=360&fit=crop'],
['Prophecy Study Session','Bible Study','','https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=640&h=360&fit=crop']];

/* ---------- PHOTO GALLERY ----------  ['photo','Caption','size']  size: '' normal, 'w' wide, 't' tall */
var GAL=[['image11','Supreme Council meeting in session','w t'],['image12','The Church leadership with the 2025 Newsletter','w t']];/* add more real photos here as new lines */

/* ---------- LEADERSHIP ----------  ['Role','Full name','Short bio (optional)','photo']  photos: image3 to image10, image19 */
var LD=[
['The Church Shepherd','Most Right Reverend Dixon Aketch Aketch','','image4'],
['1st Deputy','Right Reverend Samuel Oduya Oduya','','image10'],
['2nd Deputy','Right Reverend John Charles Otuoma Mackambo','','image7'],
['Hon. Secretary General','Pst. Joseph Otieno Jabuya','','image6'],
['Hon. Treasurer','Tobias Ndejwe','','image3'],
['Auditor General','','','image9'],
['Assistant Organizing & Development Secretary','Pst Munga','','image5'],
['Women Leader','Pst Lynette Ongili Lameck','','image8'],
['Youth Leader','','','image19']];

/* ---------- LATEST NEWS ----------  ['Tag','Headline','Full story','Date']  newest first */
var NW=[['Watch','Sermons are now online','You can now watch past sermons right here on our website, anytime and from any device.','Oct 2026'],['Prayer','Daily morning prayer','Join us every morning from 6:00 AM to 7:00 AM for prayer and meditation.','Oct 2026'],['Outreach','Medical camps and food distribution','Our Community Outreach Day brings care to families in need. Volunteers are welcome.','Oct 2026']];

/* ---------- GET INVOLVED / FAQ / WHATSAPP ---------- */
var IV=[['🙋','Volunteer','Serve in worship, ushering, children\'s ministry, outreach or media.','I would like to volunteer'],['📚','Small Groups & Bible Study','Grow in the Word with a small group near you.','I would like to join a Bible study group'],['🏠','Become a Member','Learn how to join our church family and begin your membership journey.','I would like to become a member'],['🙏','Prayer Requests','Share your need and our prayer team will stand with you.','I have a prayer request']];
var FQ=[['What time are the services?','Sabbath worship is on Saturday from 10:00 AM to 12:30 PM. Prayer & Healing is Wednesday 7:00 PM, Bible Study Thursday 6:30 PM, and Youth Fellowship Friday 7:00 PM.'],['What should I expect as a first-time visitor?','Come as you are. Our services combine traditional reverence with joyful worship, and we are happy to explain our Sabbath traditions and healing ministry.'],['Why do you worship on Saturday?','We keep the Sabbath holy as a day of rest and worship, following the biblical Sabbath and the vision of our founder, Mama Susana.'],['Can I watch services online?','Yes. Past sermons are in the Watch Our Sermons section, and our YouTube channel carries them too.'],['Do you have services for people with disabilities?','Everyone is welcome. Please call or WhatsApp us before you visit and we will help with seating and assistance.'],['How can I give?','Use the Give button to donate by M-Pesa, bank transfer or PayPal.']];
var WA='https://wa.me/254723456789?text=';

/* ---------- CHURCH DETAILS (services, ministries, branches, events, history, giving) ---------- */
var NAV=[['home','Home'],['legacy','Legacy'],['services','Services'],['sermons','Sermons'],['ministries','Ministries'],['gallery','Gallery'],['events','Events'],['news','News'],['contact','Contact']];
var Q=[['Sabbath Service','Saturday worship honoring our Sabbath tradition - 10:00 AM',0],['Prayer & Healing',"Wednesday healing services following Mama Susana's legacy - 7:00 PM",1],['Bible Study','Thursday evening deep biblical teachings - 6:30 PM',2],['Youth Fellowship','Friday gatherings for young believers - 7:00 PM',3]];
var S=[['🕊️','Saturday Sabbath Worship','10:00 AM - 12:30 PM',"Our main Sabbath service honoring God's holy day, featuring worship, prayer, communion, and inspiring sermons rooted in biblical truth. Experience the peace and blessing of Sabbath rest."],
['🙏','Wednesday Prayer & Healing','7:00 PM - 8:30 PM',"Following Mama Susana's legacy of healing ministry, join us for powerful prayer sessions where the sick find healing and hearts find comfort through God's miraculous power."],
['📖','Thursday Bible Study','6:30 PM - 8:00 PM',"Deep dive into God's Word with interactive discussions, prophecy studies, and practical applications for daily Christian living. Grow in knowledge and faith."],
['🔥','Friday Youth Fellowship','7:00 PM - 9:00 PM','Dynamic gatherings for young people featuring worship, biblical teachings relevant to youth, and fellowship activities that build lasting Christian friendships.'],
['🤝','Sunday Community Outreach','10:00 AM - 3:00 PM',"Extending God's love beyond our walls through community service, caring for the sick, supporting the bereaved, and mobilizing resources for those in need."],
['🌅','Morning Prayer Sessions','Daily - 6:00 AM - 7:00 AM',"Start your day with God through early morning prayer and meditation. Join fellow believers in seeking God's guidance and blessing for the day ahead."]];
var M=[['https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=300&fit=crop','Healing & Prayer Ministry',"Continuing Mama Susana's legacy of divine healing through prayer, laying on of hands, and faith. Witness God's miraculous power as in the early days of our church.",'Experience Healing'],
['https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=300&fit=crop','Children & Family Ministry','Nurturing the next generation with biblical foundation, Sabbath values, and Christian character. Building strong families rooted in faith and traditional values.','Join Our Family'],
['https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=300&fit=crop','Prophetic Youth Ministry','Empowering young people with prophetic gifts and biblical knowledge. Training the next generation of church leaders in the spirit of prophecy and service.','Join Youth Ministry'],
['https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=300&fit=crop','Sabbath Worship Ministry','Leading Sabbath worship with reverence and joy, maintaining our tradition of holy day observance through music, prayer, and celebration.','Join Worship'],
['https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=300&fit=crop',"Women's Fellowship Ministry",'Supporting women in their spiritual journey, family roles, and community service. Building sisterhood through prayer, study, and mutual support.','Join Sisters'],
['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop','Community Care Ministry',"Following our founder's compassion for the poor and sick, we serve our communities through welfare activities, medical camps, and social support programs.",'Serve Together']];
var B=[['Homa Bay (Headquarters)','Main church headquarters in Homa Bay County, where our legacy began and continues to flourish.'],['Nairobi Branch','Serving the capital city with urban ministry, reaching professionals and families with God\'s love.'],['Awendo Branch','Community-centered ministry in Awendo, continuing our tradition of healing and Sabbath worship.'],['Migori Branch','Border town ministry reaching diverse communities with the gospel message and healing prayer.'],['Busia Branch','Cross-border ministry serving both Kenyan and Ugandan communities with prophetic ministry.'],['Mombasa Branch','Coastal ministry bringing Sabbath worship and healing prayer to Kenya\'s port city.'],['Yimbo Branch','One of our earliest expansion locations, maintaining strong roots in traditional ministry.'],['Bondo Branch','Regional center serving the greater Bondo area with comprehensive church ministries.']];
var E=[['SEP','21','Sabbath Revival Weekend','Friday 7PM - Sunday 4PM',"Three days of intensive worship, prayer, and healing ministry. Experience the power of God as in the days of Mama Susana's early ministry."],['OCT','12','Annual Healing Campaign','10:00 AM - 6:00 PM',"Special healing service remembering Mama Susana's miraculous ministry. Come expecting God's healing touch in your life and family."],['OCT','26','Youth Prophecy Conference','All Day Event','Special conference for young people focusing on prophetic gifts, biblical prophecy, and preparing the next generation for ministry.'],['NOV','16','Community Outreach Day','8:00 AM - 4:00 PM','Following our tradition of caring for the needy, join us for medical camps, food distribution, and community support programs.']];
var T=[['1959','1959','The Beginning at Nyambare','Mama Susana and fellow believers established the Nyambare centre in Gem, Asumbi. In tents, they held powerful meetings, sharing the gospel and calling people to faith through the Spirit\'s leading.'],['1963','1963','Official Church Foundation','After her expulsion from SDA church due to her prophetic revelations, Mama Susana officially founded "Duond Wach Mokor" (The Voice of Prophecy) church in South Nyanza, marking the birth of what would become God\'s Last Appeal Church.'],['1970s','1970s','Revival & Expansion','Great revival movements spread as testimonies of divine intervention, notably the healings of Mzee Zedekia Oduma and Mama Opiyo Matewa, drew attention to the ministry. The church expanded to Yimbo, Bondo, and other parts of South & Central Nyanza.'],['1990s','1990s','Structural Organization','The movement developed into a structured faith community with growing membership, organized into local congregations and regional centers with headquarters in Homa Bay County.'],['Now','Present','Nationwide Ministry','Today, God\'s Last Appeal Church has branches in Awendo, Migori, Busia, Mombasa, and Nairobi, continuing to be a beacon of faith, healing, and inclusiveness while maintaining our core values of Sabbath observance and prophetic ministry.']];
var PAY={paybill:'567890',acc:"God's Last Appeal Church",bank:'Equity Bank Kenya',num:'0123456789',br:'Homa Bay',swift:'EQBLKENA',pp:'https://www.paypal.com/donate?business=godsappealchurch@gmail.com'};
var MAPS='https://maps.google.com/search/';

/* ---------- photo stand-ins ---------- */
var FB={};/* no stand-in photos any more */
