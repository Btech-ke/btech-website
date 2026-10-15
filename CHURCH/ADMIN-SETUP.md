# ADMIN SYSTEM SETUP (one time, about 15 minutes, free)

After this, church staff manage the **whole website** themselves at `https://YOUR-SITE/admin.html`: events, news, sermons, leadership, photo gallery, ministries, service times, branches, history, Get Involved, FAQ, contact details, giving details, social links and an announcement banner. Photos are uploaded straight from the admin page. No developer needed.

1. Go to **console.firebase.google.com** -> **Add project** -> name it (e.g. gla-church) -> Google Analytics OFF -> Create.
2. **Build -> Firestore Database -> Create database** -> closest location -> **Start in production mode** -> Enable.
3. **Firestore -> Rules** tab -> delete everything and paste the rules below. **Replace the email(s)** with the real admin Google email(s). Click **Publish**.
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{col}/{id} {
      allow read: if col in ['events','news','sermons','leaders','gallery','ministries','services','branches','timeline','involve','faq','settings'];
      allow write: if col in ['events','news','sermons','leaders','gallery','ministries','services','branches','timeline','involve','faq','settings']
        && request.auth != null
        && request.auth.token.email_verified == true
        && request.auth.token.email in ['ADMIN-EMAIL-HERE@gmail.com'];
    }
  }
}
```
   Everybody can READ (so the website works). Only the listed emails can change anything. (The admin page also shows these rules with your email filled in: Help & admins.)
4. **Build -> Authentication -> Get started -> Sign-in method**: enable **Google** (choose a support email, Save). Optionally also enable **Email/Password** and add users on the Users tab.
5. **Authentication -> Settings -> Authorized domains** -> **Add domain** -> `YOUR-USERNAME.github.io` (or your own domain).
6. **Project settings (gear) -> General -> Your apps -> Web icon `</>`** -> nickname -> Register. Copy `apiKey`, `authDomain`, `projectId`, `appId`.
7. Open `js/data.js` and fill the block near the top:
```
var FIREBASE_CONFIG={apiKey:'AIza...',authDomain:'gla-church.firebaseapp.com',projectId:'gla-church',appId:'1:123...'};
```
   Commit. Upload `admin.html` to the repository root with the other files.
8. Open `https://YOUR-SITE/admin.html` -> **Continue with Google**. Try adding a test event, refresh the website, then delete it.
9. For Leadership, Ministries, Service Times, FAQ etc.: open the section once and press **Import current website content**. After that everything can be edited, re-ordered or deleted.

## Daily use
- Bookmark `/admin.html`. Sign in with Google. Pick a section, press **Add**, fill the form, **Publish**.
- Pencil = edit. Bin = delete. Arrows = change order.
- Site settings: announcement banner, phone, WhatsApp, email, address, YouTube/Facebook/Instagram, M-Pesa and bank details.

## Notes
- Until step 7 is done, the website keeps showing the content in `js/data.js`, so nothing breaks.
- Events, news and sermons come only from the admin page once connected. For the other sections, the admin list replaces the built-in list as soon as it has at least one item.
- Upload `index.html`, `css/style.css`, `js/data.js`, `js/main.js` and `admin.html` TOGETHER when updating GitHub.
- Free Firebase plan is far more than a church site needs. Photos uploaded in the admin are resized and stored with the content (no paid storage needed).
- To add or remove an admin, edit the email list in the Firestore rules (step 3).
