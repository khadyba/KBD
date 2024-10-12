"use client";
import { useState, useEffect } from "react";
import { Article } from "../types";

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null); 

  const fetchArticles = async () => {
    try {
      const response = await fetch('/api/blog');
      if (!response.ok) {
        throw new Error('Échec de la récupération des articles');
      }
      const data = await response.json();
      setArticles(data);
      setError(null); 
    } catch (error: any) {
      console.error('Erreur lors de la récupération des articles:', error);
      setError('Erreur lors de la récupération des articles');
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <h1>Liste des articles</h1>

      {/* Affichage de l'erreur s'il y en a une */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {articles.length === 0 && !error ? (
        <p>Aucun article disponible.</p>
      ) : (
        articles.map((article) => (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <h3>{article.description}</h3>
            <p>Par {article.author} le {new Date(article.date).toLocaleDateString()}</p>
          </div>
        ))
      )}
    </>
  );
}