# Next.js Blog Platform

## Overview
A performant, modern blog platform built with Next.js 13+, TypeScript, Tailwind CSS, and a local JSON backend. Features include post creation, listing, detailed viewing, search, sorting, and markdown support. Designed for learning and demonstrating full-stack web fundamentals.

## Features
- Static homepage listing all blog posts
- Individual post pages with markdown rendering
- Create post form (local only)
- Client-side search and sort (newest/oldest)
- Responsive, accessible UI
- Bonus: Related posts, markdown, and more

## Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <project-directory>
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the backend locally:**
   ```bash
   cd backend
   npm install
   npm run dev
   ```
   The backend runs on http://localhost:4000
4. **Run the frontend locally:**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```
   The frontend runs on http://localhost:3000

## Architecture
- **frontend/**: Next.js 13+ app (App Router, TypeScript, Tailwind CSS)
  - `app/`: Pages, routing, and main UI
  - `components/`: Reusable UI components
  - `lib/`: Utility functions (API helpers, etc.)
- **backend/**: Express + TypeScript API
  - `api/`: API route handlers
  - `data/`: `posts.json` for local data storage
  - `types/`, `utils/`: TypeScript types and helpers

## Key Decisions
- **No external DB:** Uses a local JSON file for simplicity and learning.
- **API-first:** Frontend fetches all data from backend API.
- **Bonus features:** Markdown, sorting, related posts, accessibility.
- **Vercel limitation:** Backend POST/write does not persist on Vercel (see below).

## Challenges & Solutions
- **Vercel file system:** POST/write to `posts.json` only works locally. On Vercel, the backend is read-only. This is documented and the create post page is for local demo/testing.
- **Accessibility:** Focused on keyboard navigation, color contrast, and ARIA attributes.
- **Performance:** Optimized images, static generation, and minimal JS for fast loads.

## API & Vercel Limitation
- **GET /api/posts:** Returns all blog posts (works on Vercel and locally)
- **POST /api/posts:** Creates a new post (works only locally)
- **Limitation:** On Vercel, new posts will NOT persist. This is a platform limitation.

## How to Deploy
- Deploy only the `frontend/` to Vercel.
- The backend is for local development/testing only.
- Add your Vercel URL to this README after deployment.

---

# Blog Platform Frontend

## Important: Backend Limitations on Vercel

- **Post creation (POST requests) only works in local development.**
- On Vercel, the backend cannot persist new posts due to the read-only file system in serverless environments.
- The create post page and API will work locally, but new posts will NOT be saved on the deployed Vercel site.
- For production, the blog will display only the posts present in the static data file at build time.

## Local Development
- To test creating posts, run the backend locally and use the frontend at http://localhost:3000.

## Deployment
- Deploy only the frontend to Vercel.
- The backend is for local development and testing only.

---

# (Add your existing README content below) 