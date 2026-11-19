# 🏔️ Nomad Lounge - [Pages Router - Next.js]

A modern, high-performance cabin showcase and inquiry platform built with **Next.js 14 (Pages Router)**, **React**, **Tailwind CSS**, and **Supabase**.

🌐 **Live Demo:**  
[https://nextjs-pages-router-eta.vercel.app](https://vercel.app)

[https://nextjs-pages-router.netlify.app](https://netlify.app)

---

## ✨ Features & Rendering Architecture

This project demonstrates hybrid rendering patterns in the **Next.js Pages Router**:

- **Static Site Generation (SSG) & Incremental Static Regeneration (ISR):**
  - The `/cabins` catalog pre-renders cabin listings at build time via `getStaticProps` and automatically revalidates cached data every hour (`revalidate: 3600`).
- **Server-Side Rendering (SSR):**
  - Dynamic cabin detail pages (`/cabins/[cabinId]`) fetch up-to-date cabin specifications and capacity details on each request using `getServerSideProps`.
- **Full-Stack Contact Inquiry API:**
  - Built-in Next.js API route (`/api/contact`) handles `POST` requests with server-side input sanitization, email format validation, length limits, and error guards before storing inquiries in Supabase.
- **Optimized Media & Typography:**
  - Uses `next/image` with blur placeholders and configured Supabase `remotePatterns` alongside `next/font/google` (`Josefin Sans`) for zero Cumulative Layout Shift (CLS).
- **Dynamic SEO Metadata:**
  - Custom page titles and favicons configured per route using `next/head`.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (Pages Router)
- **Styling:** Tailwind CSS (Custom `primary` and `accent` color palettes)
- **Database:** Supabase (PostgreSQL & Storage)
- **Icons & Fonts:** Heroicons & Google Fonts (`Josefin Sans`)
- **Deployment:** Vercel & Netlify

---

## 📁 Project Structure

```text
├  components/          # Reusable UI components (Header, Navigation, CabinList, CabinView, etc.)
├  lib/                 # Supabase client configuration and data-fetching helpers
├  pages/
│   ├ api/
│   │   └── contact.js   # POST endpoint for validating and saving contact form inquiries
│   ├ cabins/
│   │   └── [cabinId].js # Dynamic SSR route for individual cabin details
│   ├ _app.js            # Global layout wrapper, font setup, and default Head metadata
│   ├ about.js           # Brand story and luxury cabin overview
│   ├ cabins.js          # ISR-enabled cabin catalog page
│   ├ contact.js         # Client-side validated inquiry form
│   └─ index.js          # Full-viewport landing page
├  public/               # Static assets (brand logo, hero & about photography)
├  styles/               # Global Tailwind CSS styles
├  netlify.toml          # Build configuration for Netlify deployments
└─ next.config.mjs       # Next.js configuration and Supabase image remotePatterns
```

---

## 🚀 Getting Started Locally

### 1. Clone the Repository
```bash
git clone https://github.com
cd Nextjs-Pages-Router
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory and add your Supabase credentials (matching the variable names in `lib/supabase.js`):
```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_service_or_anon_key
```

### 4. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🗄️ Supabase Database Tables

This application connects to two primary tables in Supabase:

1. **`cabins`**: Stores cabin listings (`id`, `name`, `maxCapacity`, `regularPrice`, `discount`, `description`, `image`).
2. **`contact`**: Stores guest inquiries submitted via `/contact` (`id`, `fullName`, `email`, `subject`, `message`, `created_at`).

---

## ☁️ Deployment

This repository is configured for seamless deployment on both **Vercel** and **Netlify**:

1. Import `Kenfod/Nextjs-Pages-Router` into your hosting dashboard.
2. Add your `SUPABASE_URL` and `SUPABASE_KEY` environment variables in the project settings.
3. Deploy using `npm run build`.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
