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
      <h1 className="text-2xl">Liste des articles</h1>

      {/* Affichage de l'erreur s'il y en a une */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {articles.length === 0 && !error ? (
        <p>Aucun article disponible.</p>
      ) : (
        articles.map((article) => {
          const articleDate = typeof article.createdAt === 'string' ? new Date(article.createdAt) : article.createdAt;

          return (
            <div key={article.id} className="mb-4 p-4 border border-gray-300 rounded-lg">
              <h2 className="text-xl font-bold">Titre: {article.title}</h2>
              <p className="text-sm text-gray-500">Publié le: {articleDate.toLocaleDateString()}</p>

              {/* Affichage de l'image si elle existe */}
              {article.image && (
                <I src={article.image} alt={article.title} className="mt-2 mb-4 w-full h-auto rounded-lg" />
              )}

              <a href={`/blog/${article.id}`} className="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                Voir Détail
              </a>
            </div>
          );
        })
      )}
    </>
  );
}

