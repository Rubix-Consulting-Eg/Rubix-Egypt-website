# Rubix Egypt – Landing Page

Modern, professional, technology-focused website for **Rubix Egypt**, a technical development team specializing in software development and artificial intelligence solutions.

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Material UI v5** (MUI) with custom theme
- **Framer Motion** for animations
- **next/image** for optimized images
- **Plus Jakarta Sans** (next/font)

## Setup

1. **Install dependencies**

   ```bash
   cd rubix-egypt
   npm install
   ```

2. **Add the logo**

   Place your Rubix logo image at `public/logo.png`. If you have the logo in your workspace assets, copy it:

   ```bash
   copy "path\to\your\logo.png" "public\logo.png"
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
rubix-egypt/
├── app/
│   ├── layout.tsx       # MUI ThemeProvider + fonts + SEO meta
│   ├── page.tsx         # Imports all sections
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── InsightsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── TeamSection.tsx
│   │   └── VisionSection.tsx
│   └── ui/
│       ├── GlassCard.tsx
│       └── SectionWrapper.tsx
├── theme/
│   └── theme.ts         # Custom MUI theme (primary #BE0E5B, dark bg)
└── public/
    └── logo.png         # Add your Rubix logo here
```

## Design

- **Background:** `#0A0A0F`
- **Primary accent:** `#BE0E5B` (vibrant pink-red)
- **Cards:** Glassmorphism (blur, semi-transparent), 8px border-radius
- **Typography:** Plus Jakarta Sans, H1 64px/700, H2 40px/700

© 2026 Rubix AI Pulse
