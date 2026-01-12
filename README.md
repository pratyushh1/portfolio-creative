# Portfolio Creative - Video Editor Portfolio

A premium, cinematic portfolio website for a short-form video editor specializing in attention-grabbing content for tech and creator brands.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055)

## 🎬 Features

- **Cinematic Design**: Dark theme with gradient backgrounds, glassmorphism, and subtle film grain
- **Smooth Animations**: Page transitions and micro-interactions powered by Framer Motion
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **Client Showcases**: Dedicated pages for Tech Burner and Open Letter
- **Video Grid**: Filterable portfolio with hover effects and category filtering
- **Contact Form**: Premium form with validation and smooth submission flow

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd portfolio-creative
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

\`\`\`
portfolio-creative/
├── app/
│   ├── page.tsx              # Home page with hero
│   ├── work/
│   │   └── page.tsx          # Portfolio grid
│   ├── clients/
│   │   ├── tech-burner/
│   │   │   └── page.tsx      # Tech Burner showcase
│   │   └── open-letter/
│   │       └── page.tsx      # Open Letter showcase
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact form
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Navigation.tsx        # Main navigation
│   ├── Footer.tsx            # Site footer
│   ├── VideoCard.tsx         # Reusable video card
│   ├── PageTransition.tsx    # Page transition wrapper
│   └── SectionHeader.tsx     # Section headers
├── lib/
│   └── projects.ts           # Project data
└── tailwind.config.ts        # Tailwind configuration
\`\`\`

## 🎨 Customization

### Brand Colors

Edit the color palette in [tailwind.config.ts](tailwind.config.ts):

\`\`\`typescript
colors: {
  dark: {
    DEFAULT: '#0a0a0f',
    lighter: '#121218',
    card: '#1a1a24',
  },
  accent: {
    purple: '#a855f7',
    blue: '#3b82f6',
    cyan: '#06b6d4',
  },
}
\`\`\`

### Projects

Update your portfolio projects in [lib/projects.ts](lib/projects.ts):

\`\`\`typescript
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Your Project',
    client: 'Tech Burner',
    category: 'Reels',
    thumbnail: '/path/to/thumbnail.jpg',
    videoUrl: 'https://your-video-url.mp4',
    description: 'Project description',
    driveUrl: 'https://drive.google.com/...',
  },
  // Add more projects...
];
\`\`\`

### Contact Information

Update social links and contact details in:
- [components/Footer.tsx](components/Footer.tsx)
- [app/contact/page.tsx](app/contact/page.tsx)

## 📦 Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🚀 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure your domain (optional)
4. Deploy!

## 🎥 Adding Videos

Videos should be hosted externally (Google Drive, Vimeo, YouTube) for optimal performance:

1. Upload videos to your preferred platform
2. Get the embed or direct URL
3. Add to your project data in [lib/projects.ts](lib/projects.ts)

## 📱 Pages Overview

- **Home** (`/`): Hero section with CTAs and expertise showcase
- **Work** (`/work`): Filterable video grid
- **Tech Burner** (`/clients/tech-burner`): Client showcase
- **Open Letter** (`/clients/open-letter`): Client showcase
- **About** (`/about`): Bio, stats, and philosophy
- **Contact** (`/contact`): Contact form and info

## ⚡ Performance

- Optimized animations with Framer Motion
- Lazy loading for videos
- Image optimization with Next.js
- Minimal dependencies
- Fast page transitions

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or support, reach out at [your-email@example.com](mailto:your-email@example.com)

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
