# SoftSell – Resell Unused Software Licenses

SoftSell is a modern, responsive landing page that allows users to understand, evaluate, and initiate the resale of unused software licenses. It includes a clean UI, dark/light mode toggle, smooth animations, and a bonus AI-powered customer support chatbot.

This project was built as part of a web development internship assignment and completed within 48 hours as per the brief.

---

## Features Implemented

### Core UI
- Fully responsive layout using **Tailwind CSS v4**
- Mobile-friendly and optimized for various screen sizes
- Clear, modern design with intuitive sections:
  - Hero section
  - How it works
  - Why choose us
  - Testimonials
  - Contact form

### Design Enhancements
- Light/Dark mode toggle (class-based strategy)
- Favicon + basic logo placeholder
- SEO meta tags (title, description, Open Graph preview)
- Consistent font and color palette for readability

### Motion & Interactivity
- Scroll-based animations using **Framer Motion**
- Smooth transitions across all sections
- Hover/tap feedback on buttons and cards

### Bonus: LLM-Powered Chat Widget
- Floating AI chatbot powered by **OpenRouter (GPT-3.5)**
- Suggested quick questions for users
- Real-time messaging with clean chat UI
- Works with a public OpenRouter API key (no billing required)

---

## Design Choices

- **Tailwind CSS v4** was chosen for rapid, utility-first styling and future-proof structure.
- **Framer Motion** adds minimal but elegant animations without extra bloat.
- The chatbot was implemented with a real LLM API via OpenRouter to avoid billing issues while demonstrating real AI interaction.
- Sections are organized for clarity, focusing on user trust and conversion (e.g., testimonials, CTA).
- Used React functional components with state hooks for simplicity and speed.

---

## Time Spent

- **Day 1:** UI layout, Tailwind integration, responsiveness, section building
- **Day 2:** Dark mode, SEO tags, Framer Motion animations, AI chat widget, testing & cleanup

_Total time: ~14–16 hours spread over 2 days._

---

## Live Demo

> https://soft-sell-seven-sable.vercel.app

---

## Tech Stack

- React + Vite
- Tailwind CSS v4 (utility-first CSS)
- Framer Motion (animation)
- OpenRouter (GPT-3.5 backend)
- Axios (API calls)

---

## Setup & Run Locally

```bash
git clone https://github.com/Krishanu2212/SoftSell.git
cd softsell
npm install

* Create a .env file:
VITE_OPENROUTER_API_KEY=your_api_key_here

* Start the dev server:
npm run dev


