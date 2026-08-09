# Tweeny Skin Video Creatives

A lightweight, responsive HTML/CSS/JavaScript video gallery created for Anushka Pandey's digital media planning portfolio.

## Included

- 3 uploaded MP4 creatives
- 9:16 video cards
- Tweeny Skin orange `#FF8301`
- Tweeny Skin yellow `#FFE900`
- Poppins typography
- Play / pause control
- Mute / unmute control
- Progress bar
- Only one video plays at a time
- Responsive 3 / 2 / 1 column layout
- No frameworks
- No build tools
- GitHub Pages compatible

## Files

```text
tweeny-video-creatives/
├── index.html
├── style.css
├── script.js
├── README.md
└── videos/
    ├── creative-01.mp4
    ├── creative-02.mp4
    └── creative-03.mp4
```

## GitHub Pages deployment for beginners

### 1. Create your repository

Go to GitHub and create a new **Public** repository.

Suggested name:

`tweeny-video-creatives`

Do not add a README from GitHub because this project already contains one.

### 2. Upload the project

Open the repository and choose:

**Add file → Upload files**

Upload:

- `index.html`
- `style.css`
- `script.js`
- `README.md`
- the entire `videos` folder

The final repository should show `index.html` at the top level, not inside another folder.

### 3. Commit

At the bottom of the upload page:

**Commit changes**

Use:

`Initial video creatives gallery`

### 4. Turn on GitHub Pages

Open:

**Settings → Pages**

Under **Build and deployment**:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/ (root)**

Click **Save**.

### 5. Wait for deployment

Give GitHub a few minutes.

Your website will normally be available at:

`https://YOUR-GITHUB-USERNAME.github.io/tweeny-video-creatives/`

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username.

### 6. Put it in Behance

Behance cannot execute your GitHub HTML directly inside the project as arbitrary custom code.

Instead, add a screenshot/preview of the gallery to your Behance case study and use a button or text link such as:

**View Interactive Video Gallery →**

Link that button to your GitHub Pages URL.

## How to replace a video later

Replace the relevant file in the `videos` folder while keeping the same filename:

- `creative-01.mp4`
- `creative-02.mp4`
- `creative-03.mp4`

Commit the change to GitHub. GitHub Pages will redeploy automatically.

## Important

The uploaded videos are already 9:16:

- Creative 01: 360 × 640
- Creative 02: 360 × 640
- Creative 03: 360 × 640

The third video is longer than the first two, but the player handles different durations automatically.

## Local preview

If you want to test the project before uploading it, keep the folder structure intact and open `index.html` in a modern browser. If your browser blocks local video playback, use GitHub Pages or a simple local web server instead.
