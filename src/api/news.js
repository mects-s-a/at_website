import { list } from '@vercel/blob';

const NEWS_DATA_KEY = 'data/news-uploaded.json';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return res.status(200).json([]); // not configured yet, behave gracefully
  }

  try {
    const { blobs } = await list({ prefix: NEWS_DATA_KEY });
    const existing = blobs.find((b) => b.pathname === NEWS_DATA_KEY);
    if (!existing) {
      return res.status(200).json([]);
    }
    const response = await fetch(existing.url);
    if (!response.ok) {
      return res.status(200).json([]);
    }
    const articles = await response.json();
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    return res.status(200).json(articles);
  } catch (err) {
    console.error('Failed to fetch news:', err);
    return res.status(200).json([]); // fail soft, don't break the public site
  }
}