# Portfolio Website — Assignment 4

A personal portfolio built with **React** + **React Router v6**, deployed via **GitHub Pages**.

---

## 🔧 Customize Your Details

### 1. Personal Info (`src/pages/Home.js`)
Edit the `PROFILE` object at the top of the file:
```js
const PROFILE = {
  name: 'Your Full Name',
  tagline: 'Your Role / Tagline',
  phone: '+91 XXXXX XXXXX',
  personalEmail: 'you@gmail.com',
  collegeEmail: 'you@college.edu',
  github: 'https://github.com/your-username',
  ...
};
```

### 2. Projects (`src/pages/Projects.js`)
Edit the `PROJECTS` array — add at least 2 projects:
```js
{ title: 'My Project', github: 'https://github.com/...', tech: ['React', 'Node.js'], ... }
```

### 3. Profile Photo
- Put your photo in `public/` as `profile.jpg`
- In `src/pages/Home.js`, inside `hero-avatar`, replace the `<div className="avatar-placeholder">` block with:
  ```jsx
  <img src="profile.jpg" alt="Profile" style={{width:'100%',height:'100%',objectFit:'cover'}} />
  ```

---

## 🚀 Running Locally
```bash
npm install
npm start
```

---

## 📦 Deploying to GitHub Pages

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/your-username/portfolio.git
git push -u origin main
```

### Step 2 — Install gh-pages
```bash
npm install gh-pages --save-dev
```

### Step 3 — Update `package.json`
Replace `your-username` in the `"homepage"` field:
```json
"homepage": "https://your-username.github.io/portfolio"
```

### Step 4 — Deploy
```bash
npm run deploy
```

### Step 5 — Enable Pages on GitHub
Go to **Repository → Settings → Pages → Branch: gh-pages → Save**

Your site will be live at `https://your-username.github.io/portfolio`

---

## ✅ Assignment Checklist
- [x] Home Page (About Me, Research Interests, Personal Details, Skills)
- [x] Projects Page (with GitHub links)
- [x] NavLink routing between pages
- [x] Personal details (Name, Phone, Emails, Skills, 3 projects)
- [x] CSS styling
- [x] HashRouter (for GitHub Pages compatibility)
- [x] Deployment scripts in package.json
