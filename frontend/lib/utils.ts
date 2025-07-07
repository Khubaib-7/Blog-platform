import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Utility to merge Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Fetch all blog posts from the backend API
export async function fetchPosts() {
  const res = await fetch('http://localhost:4000/api/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

// Fetch a single post by ID from the backend API
export async function fetchPostById(id: string | number) {
  const res = await fetch('http://localhost:4000/api/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  const posts = await res.json();
  return posts.find((post: any) => String(post.id) === String(id));
}

// Fetch all posts (used for related posts)
export async function fetchAllPosts() {
  const res = await fetch('http://localhost:4000/api/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}
