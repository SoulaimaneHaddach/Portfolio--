# Portfolio Website

Personal portfolio website for Haddach Soulaimane, built with Next.js, React,
TypeScript, Tailwind CSS, Framer Motion, and Lucide React. It presents selected
projects, technical skills, professional experience, and contact details in a
responsive single-page experience.

## Live Demo

[soulaimane-haddach.netlify.app](https://soulaimane-haddach.netlify.app)

## Features

- Responsive portfolio layout for desktop and mobile.
- Hero, projects, skills, experience, and contact sections.
- Animated reveals, typing effects, counters, tilt cards, magnetic buttons, and
	scroll progress.
- Light and dark theme support.
- Contact form with client-side validation and Formspree submission.
- Separate privacy and terms pages.

## Tech Stack

- **Framework:** Next.js 14 with the App Router
- **Language:** TypeScript
- **UI:** React, Tailwind CSS, Framer Motion, Lucide React
- **Deployment:** Netlify

## Getting Started

### Prerequisites

- Node.js 18.17 or newer
- npm

### Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/solaymane403/Portfolio--.git
cd Portfolio--
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

Create and run a production build:

```bash
npm run build
npm start
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm start` | Start the production server |
| `npm run lint` | Run the Next.js ESLint command |

## Project Structure

```text
src/
├── app/              # App Router pages, layout, and global styles
├── components/       # Portfolio sections and interactive UI components
├── data/             # Project and skill data
└── hooks/            # Shared React hooks, including theme handling
public/               # Static files served from the site root
```

The contact form submits to the Formspree endpoint configured in
`src/components/Contact.tsx`. Update that endpoint there if the form is moved to
a different Formspree form.

## Pages

- `/` - Main portfolio page
- `/privacy` - Privacy policy
- `/terms` - Terms of use

## Deployment

The project is configured for deployment on Netlify. Build the site with
`npm run build`; Netlify can use the repository's `netlify.toml` configuration
for the deployment settings.
