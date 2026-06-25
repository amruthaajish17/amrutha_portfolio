# Personal Portfolio - Amrutha Ajish Achuthan

A modern, high-performance personal portfolio website built using **TanStack Start (React SSR)**, **Tailwind CSS**, and **Vite / Nitro**. This portfolio highlights professional experience, technical skills, services, projects, and key achievements.

---

## 🚀 Features

- **Server-Side Rendering (SSR)**: Instant initial load times and robust SEO out-of-the-box.
- **Modern Design & Layout**: Clean typography, elegant dark aesthetic, smooth responsive layouts, and interactive micro-animations.
- **Structured Sections**:
  - **Hero / Home**: A compelling introduction and quick summary.
  - **About**: Background, core values, and focus areas.
  - **Experience**: Timeline detailing professional career milestones.
  - **Services**: Specialized solutions provided (e.g. Frontend Development, UX/UI, Consulting).
  - **Portfolio**: Interactive grid showcasing selected work.
  - **Achievements**: Visual display of certifications, awards, and competitions.
  - **Contact**: Structured communication options.

---

## 🛠️ Tech Stack

- **Core Framework**: [TanStack Start](https://tanstack.com/router/latest/docs/framework/react/start/overview) (React SSR)
- **Bundler & Server Engine**: [Vite](https://vite.dev/) & [Nitro](https://nitro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Config Wrapper**: `@lovable.dev/vite-tanstack-config`

---

## 💻 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (LTS version recommended).

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### 3. Build for Production
To build the application for production locally:
```bash
npm run build
```

---

## 🌐 Deployment Guide

This project is configured out-of-the-box for **Cloudflare Pages** using the modern unified Assets/Workers engine via Nitro.

### Option A: Automatic Git Deploy (Recommended)
1. Push your project to a **GitHub** repository.
2. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com).
3. Navigate to **Workers & Pages** -> **Create** -> **Pages** -> **Connect to Git**.
4. Select your repository.
5. In the Build settings:
   - **Framework Preset**: `None`
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `.output/public`
6. Click **Save and Deploy**. Cloudflare will rebuild and deploy your site on every push.

### Option B: Manual CLI Deploy (Instant)
To deploy directly from your local machine:
1. Log in to Wrangler:
   ```bash
   npx wrangler login
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the prebuilt build using the generated wrangler config:
   ```bash
   npx wrangler deploy --config .output/server/wrangler.json
   ```

---

## 📁 Project Structure

```
├── .lovable/              # Lovable template metadata
├── public/                # Static public assets (images, icons)
├── src/
│   ├── assets/            # Embedded visual assets
│   ├── components/
│   │   ├── portfolio/     # Section components (Hero, Experience, Portfolio, etc.)
│   │   └── ui/            # UI components (buttons, cards, banners)
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions and error capturing
│   ├── routes/            # TanStack Router page routes
│   ├── styles.css         # Styling rules & Tailwind layers
│   ├── server.ts          # SSR server entry point
│   └── start.ts           # Client side hydration entry point
├── package.json           # Scripts and dependencies
└── vite.config.ts         # Vite build configuration
```
