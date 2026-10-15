# GOD'S LAST APPEAL CHURCH WEBSITE: COMPLETE INSTRUCTIONS

## 0. What changed
The site is now split into small files, so you only edit the part you need:

```
index.html        page structure (rarely edited)
css/style.css     design (rarely edited)
js/main.js        behaviour (rarely edited)
js/data.js        ALL CONTENT: sermons, gallery, leaders, news, get involved, FAQ, services, events, giving
images/           your photos: image1.jpg ... image20.jpg
```

**Why "Watch Our Sermons" looked like a blank green page:** the sermons had no video yet, so the player showed an empty green box. Now an empty sermon shows its photo with "Sermon video coming soon". Once you add a real video (step 4) it plays inside the page.

**Safe by design:** until a real photo exists, the site shows a temporary stand-in picture, so nothing breaks while you upload.

---

## 1. Prepare the 20 photos
Rename each photo EXACTLY like this (lowercase, `.jpg`):

| File | Photo | Where it appears |
|---|---|---|
| image3.jpg | Hon. Treasurer Tobias Ndejwe | Leadership |
| image4.jpg | Most Right Reverend Dixon Aketch Aketch, The Church Shepherd | Leadership |
| image5.jpg | Pst Munga, Assistant Organizing & Development Secretary | Leadership |
| image6.jpg | Hon. Secretary General Pst. Joseph Otieno Jabuya | Leadership |
| image7.jpg | 2nd Deputy Right Reverend John Charles Otuoma Mackambo | Leadership |
| image8.jpg | Pst Lynette Ongili Lameck, Women Leader | Leadership |
| image9.jpg | Auditor General | Leadership |
| image10.jpg | 1st Deputy Right Reverend Samuel Oduya Oduya | Leadership |
| image11.jpg | Supreme Council meeting in session | Gallery |
| image12.jpg | The Church leadership with the 2025 Newsletter | Gallery |
| image19.jpg | Youth Leader | Leadership |

Other numbers (image1, image2, image13 to image18, image20) are not placed yet. The logo, home background, legacy photo and ministry pictures still use temporary stand-in photos until you tell me which image is which.

**Make them small** (important for people on mobile data): go to **squoosh.app**, open a photo, choose MozJPEG, width 1600 px (logo and leaders 600 px), quality 75, download. Aim for under 400 KB each. Names are case-sensitive on GitHub: `image1.jpg`, not `Image1.JPG`. Photos from phones that are `.jpeg` or `.png` must be saved as `.jpg` (Squoosh does this).

## 2. Put everything on GitHub
Open your repository in the browser.

1. **Replace index.html:** click `index.html` → pencil icon → select all, paste the new `index.html` → **Commit changes**.
2. **Add the other files:** **Add file → Create new file**. In the name box type `css/style.css` (typing the slash creates the folder). Paste the content of `style.css` → Commit. Repeat for `js/main.js` and `js/data.js`.
3. **Create the images folder:** Add file → Create new file → name `images/README.txt` → type anything → Commit.
4. **Upload photos:** open the `images` folder → **Add file → Upload files** → choose image1.jpg to image20.jpg → Commit. (You can upload in batches of 5 to 10 if your network is slow.)

## 3. Get the link to send for approval
**Option A: GitHub Pages (permanent, free):**
Repository → **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main`, folder `/ (root)` → **Save**. After 1 to 2 minutes your link is `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`. Open it on your phone and on a computer before sending.

**Option B: fastest preview (no GitHub needed):** go to **app.netlify.com/drop** and drag in the whole `site` folder (unzipped). You get a live link immediately.

Every time you commit a change on GitHub, the live site updates in about a minute (refresh twice if you still see the old version).

## 4. Add real sermons (fixes the green box)
Open `js/data.js` on GitHub → pencil icon → find `SER`.
- **YouTube:** open the video, copy the 11 letters after `v=` (example: `https://www.youtube.com/watch?v=dQw4w9WgXcQ` gives `dQw4w9WgXcQ`). Put it in the third slot:
  `['Sabbath Service: 12 Oct','Sabbath','dQw4w9WgXcQ','image10'],`
- **Facebook video:** paste the full video link in the third slot.
- **Video file:** upload it to a `videos/` folder and write `'videos/sermon1.mp4'`. (Keep files small; YouTube is better for long sermons.)
- Add a new sermon by copying one whole line, pasting it above the others, and changing the words. The category (second slot) creates the filter buttons automatically.
- Put your channel link in `var YT='...';` so the "Open YouTube Channel" button works.

## 5. Latest News: how to post an update
In `js/data.js`, find `NW`. Copy this line and paste it as the FIRST line inside the list (newest first):
```
['Event','Annual Healing Campaign this Saturday','Full story goes here. Keep it short and clear.','15 Oct 2026'],
```
The four parts are: tag, headline, full story, date. Commit. Done.

## 6. Leadership
In `LD`, put the person's full name in the second slot, for example:
`['Hon. Treasurer','Tobias Ndejwe','Short bio here (optional).','image3'],`
Until a name is added, the card shows only the role (nothing looks blank or fake).

## 7. Get Involved and FAQ
- `IV` holds the four Get Involved cards. Each ends with the WhatsApp message that is pre-filled when someone taps it.
- `WA` is the church WhatsApp number (format `254712345678`, no plus or spaces).
- `FQ` holds the FAQ questions and answers. Copy a line to add one.

## 8. MUST CHECK before you send for approval
I filled these with placeholder or example values, and I cannot verify them. Replace them with the church's real details in `js/data.js` (`PAY`, `S`, `E`, `B`) and in the Contact section of `index.html`:
- M-Pesa paybill, bank name and account number, PayPal email
- phone, WhatsApp and email addresses
- event dates (no year is shown, and some have passed)
- the news items, FAQ answers and leaders' roles
- social links in the footer (currently `#`)
Wrong payment details on a live church site are a serious problem, so please confirm them with the church office.

## 9. Fewer scrolls: suggestion for the next version
The home page is long. A good next step is to keep the home page short and give the big sections their own pages (`sermons.html`, `gallery.html`, `news.html`) that share the same `css/style.css`, `js/main.js` and `js/data.js`, with a button on the home page for each. The file split above already prepares for this, so nothing needs to be rewritten. Ask for it in a new chat and mention these files.

## 10. If something looks wrong
- Photo missing: check the name is exactly `imageN.jpg` and is inside the `images` folder.
- Page looks unstyled: `css/style.css` is missing or in the wrong folder.
- Sections empty or nothing opens: a comma or quote was deleted in `js/data.js`. Undo your last commit on GitHub (History → Revert) and redo the edit carefully.


---

## Mobile layout (v3)
Phones (under 700px wide) now get their own layout. Desktop and tablet are unchanged.

- **Bottom bar:** Home, Services, Give, Sermons, Visit. The Give button is always one tap away.
- **Swipe carousels:** Quick info, Services, Ministries, Events, News, Leadership, Get Involved and Sermons slide sideways instead of stacking. A small progress line under each shows position.
- **Legacy text** is collapsed behind a "Read more" button.
- **Contact** starts with Call / WhatsApp / Directions buttons.
- **Menu:** the close (X) button now stays on top of the menu.

All mobile styling lives in the last section of `css/style.css` (headed "MOBILE EXPERIENCE"). To change the carousel card width, edit `flex:0 0 78%`.

## Mobile v4 (dark glass)
- Phones get a dark glass theme (translucent cards, gold accents). Desktop is unchanged.
- **Menu** is now a slide-in side drawer. Tap the dark area or swipe right to close it.
- **Ministries** are tap-to-expand on phones. **Leadership** shows 6 people two-across with a "Show all" button; **Branches** and **Journey** also collapse; **Sermons** show 3 compact rows with "Show more".
- To change how many show before "Show all": edit the numbers in `js/main.js` next to `['#lead',6,'leaders']`, `['#bra',4,...]`, `['#tl',3,...]`. Sermons use `STEP` (3 on phones).
