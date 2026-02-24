# Jaydeep Manchanda Portfolio

A modern, responsive portfolio website built using **React (Vite)**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

## Folder Structure

```bash
.
├── public
│   ├── favicon.svg
│   ├── Jaydeep_Manchanda_Resume.pdf
│   └── og-image.png
├── src
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── SectionHeader.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start local dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview production build:
   ```bash
   npm run preview
   ```

## Deployment

### Deploy to Vercel
1. Push repository to GitHub.
2. Import project in Vercel.
3. Framework preset: **Vite**.
4. Build Command: `npm run build`
5. Output Directory: `dist`

### Deploy to Netlify
1. Connect repository to Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`

## Notes
- Replace `public/Jaydeep_Manchanda_Resume.pdf` with the latest resume.
- Update `https://www.linkedin.com` placeholders with the real LinkedIn profile URL.
- Replace `public/og-image.png` placeholder with a real social preview image.
