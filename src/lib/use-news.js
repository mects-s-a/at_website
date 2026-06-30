import { useState, useEffect } from "react";
import { articles as staticArticles } from "../data/news";

export function useAllArticles() {
  const [uploadedArticles, setUploadedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/news")
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (!cancelled) setUploadedArticles(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (!cancelled) setUploadedArticles([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Uploaded articles first (most recent), then static ones
  const articles = [...uploadedArticles, ...staticArticles];

  return { articles, loading };
}