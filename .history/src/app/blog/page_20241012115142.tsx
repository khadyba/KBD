"use client";
import { useState, useEffect } from "react";
import { Article } from "../types";

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);  // Pour afficher une erreur si besoin

  const fetchArticles = async () => {
    try {
      const response = await fetch('/api/blog');
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      setError('Erreur lors de la récupération des articles');
      console.error('Erreur lors de la récupération des articles:', error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <h1 className="text-">Liste des articles</h1>

      {/* Affichage de l'erreur s'il y en a une */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {articles.length === 0 && !error ? (
        <p>Aucun article disponible.</p>
      ) : (
        articles.map((article) => {
          // Convertir `createdAt` en Date si c'est une chaîne ISO
          const articleDate = typeof article.createdAt === 'string' ? new Date(article.createdAt) : article.createdAt;
          
          return (
            <div key={article.id}>
              <h2>{article.title}</h2>
              <h3>{article.description}</h3>
              <p>Par {article.author} le {articleDate.toLocaleDateString()}</p>
            </div>
          );
        })
      )}
    </>
  );
}

