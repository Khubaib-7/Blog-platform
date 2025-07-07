# Project Tasks: Next.js Blog Platform

## IMPLEMENT Mode: API Integration & Implementation Checklist

### Backend (Completed)
- [x] Implement Express + TypeScript backend API
- [x] GET /api/posts returns all posts from data/posts.json
- [x] POST /api/posts creates a new post (with validation and sanitization)
- [x] Data stored in backend/data/posts.json

### Frontend (Completed)
- [x] Homepage fetches posts from backend API
- [x] Homepage displays title, author, date, excerpt, and "Read More" link
- [x] Homepage shows loading and error states
- [x] Homepage is modern, responsive, and visually appealing
- [x] Homepage: client-side search/filtering (real-time, case-insensitive, with 'No results found')
- [x] Homepage: excerpt is generated from content if not provided (150 chars + ...)
- [x] Homepage: sort by date toggle (bonus)
- [x] Individual post page fetches post by ID from backend
- [x] Individual post page displays all required fields
- [x] Individual post page handles not-found and error states
- [x] Individual post page: related posts section uses dynamic data
- [x] Individual post page: markdown support for post content (bonus)
- [x] Create post page with form for title, content, author
- [x] Create post page POSTs to backend API
- [x] Create post page has client-side validation and user feedback
- [x] Create post page redirects to homepage on success
- [x] UI is accessible and responsive (basic review)
- [x] Accessibility: full keyboard/focus review, aria-live for messages

### Integration & Testing
- [x] Document backend usage and Vercel limitations in README
- [ ] Test all user flows (list, view, create, search, sort, markdown)
- [ ] Handle CORS and network errors gracefully

---

## Non-Functional Requirements (NFRs)

- [ ] **Performance**
  - [ ] Lighthouse score 90+ (homepage, post pages)
  - [ ] FCP under 1.8s

- [x] **Usability & Accessibility (A11y)**
  - [x] Full keyboard navigation
  - [x] Clear focus states for all interactive elements
  - [x] Color contrast meets WCAG 2.1 AA
  - [x] All images have alt tags, icons have aria-labels

- [x] **Responsiveness**
  - [x] Layout adapts to mobile, tablet, desktop

- [x] **Code Quality & Maintainability**
  - [x] TypeScript strict mode enabled
  - [x] Logical, modular file structure
  - [x] Small, single-purpose components
  - [x] Comment complex logic

---

## Deliverables

- [x] Public GitHub repository with full codebase
- [x] Comprehensive README.md (overview, setup, architecture, challenges, API note)
- [ ] Live Vercel deployment

---

## Implementation Steps
1. Integrate frontend with backend API for all blog data operations.
2. Replace static data fetching with HTTP requests to backend.
3. Implement error handling and user feedback in the UI.
4. Test all flows locally and ensure requirements in prd.md are met.

---

_Last updated: IMPLEMENT mode, comprehensive README complete._ 