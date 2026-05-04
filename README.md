# Hotel Room Service Landing Page

A modern, high-performance landing page for a Hotel Management System, built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** in your browser to see the results.

## 🛠 Project Structure

- `src/app/`: Next.js App Router (Page, Layout, Metadata).
- `src/components/sections/`: Modular React components for each section.
- `src/components/layout/`: Shared layout components (Navbar, Footer).
- `src/lib/utils.ts`: Utility for merging Tailwind classes.

## 📈 SEO & Optimization

- **Metadata:** Fully configured in `src/app/layout.tsx` (Open Graph, Twitter, Keywords).
- **Structured Data:** JSON-LD implemented in `src/app/page.tsx`.
- **Sitemap & Robots:** Automatically generated via `src/app/sitemap.ts` and `src/app/robots.ts`.
- **Performance:** Optimized fonts using `next/font` and smooth animations with `framer-motion`.

## 📦 Deployment

This project is ready to be deployed to **Vercel** (recommended), **Netlify**, or any other static hosting provider.

### Vercel (Fastest)
1. Push this code to a GitHub repository.
2. Import the project in [Vercel](https://vercel.com/new).
3. Vercel will automatically detect Next.js and deploy your site.

### Manual Build
```bash
npm run build
npm run start
```

## 📝 To-Do for Production
- [x] Set domain to `hms.codebyakshay.com` in SEO configurations.
- [ ] Add an `og-image.jpg` (1200x630) to the `public/` folder for social sharing.
- [ ] Add a `favicon.ico` to the `public/` folder.
- [ ] Update the contact email in `src/app/page.tsx` and `src/components/layout/Footer.tsx`.
