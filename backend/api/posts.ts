import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { BlogPost } from '../types';
import { sanitizeInput } from '../utils/sanitize';

const router = express.Router();
const DATA_PATH = path.join(__dirname, '../data/posts.json');

// Helper to read posts
function readPosts(): BlogPost[] {
  try {
    const data = fs.readFileSync(DATA_PATH, 'utf-8');
    return JSON.parse(data) as BlogPost[];
  } catch (err) {
    return [];
  }
}

// Helper to write posts
function writePosts(posts: BlogPost[]): void {
  fs.writeFileSync(DATA_PATH, JSON.stringify(posts, null, 2), 'utf-8');
}

// GET /api/posts
router.get('/', (req: Request, res: Response) => {
  try {
    const posts = readPosts();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read posts.' });
  }
});

// POST /api/posts
router.post('/', (req: Request, res: Response) => {
  const { title, content, author } = req.body;
  if (
    typeof title !== 'string' || title.length < 5 ||
    typeof content !== 'string' || content.length < 1 ||
    typeof author !== 'string' || author.length < 1
  ) {
    return res.status(400).json({ error: 'Invalid input.' });
  }
  const posts = readPosts();
  const newPost: BlogPost = {
    id: posts.length > 0 ? posts[0].id + 1 : 1,
    title: sanitizeInput(title),
    content: sanitizeInput(content),
    author: sanitizeInput(author),
    date: new Date().toISOString().split('T')[0],
  };
  posts.unshift(newPost);
  try {
    writePosts(posts);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: 'Failed to write post.' });
  }
});

export default router; 