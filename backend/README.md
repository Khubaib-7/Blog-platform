# Blog Platform Backend

This backend provides a simple REST API for blog posts, using a local JSON file for storage.

## Setup

1. Install dependencies:
   ```
   cd backend
   npm install
   ```
2. Start the server:
   ```
   npm run dev
   ```
   The server will run on http://localhost:4000

## API Endpoints

### GET /api/posts
- Returns all blog posts as an array.

### POST /api/posts
- Creates a new blog post.
- Request body: `{ "title": string, "content": string, "author": string }`
- Response: The created BlogPost object.

## Notes
- Data is stored in `data/posts.json`.
- This backend is for local development only. File writes will not persist on Vercel or other serverless platforms. 