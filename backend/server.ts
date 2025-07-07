import express from 'express';
import cors from 'cors';
import postsRouter from './api/posts';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use('/api/posts', postsRouter);

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
}); 