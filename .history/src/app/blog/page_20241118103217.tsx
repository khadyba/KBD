"use client";
import { useState, useEffect } from "react";
import { Article } from "../types";
import Image from 'next/image'; 

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);  

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
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-800">Articles du blog</h1>

      {/* Affichage de l'erreur s'il y en a une */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {articles.length === 0 && !error ? (
        <p className="text-center text-gray-500">Aucun article disponible.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="bg-yellow-400 rounded-xl overflow-hidden shadow-lg flex flex-col items-center p-4"
            >
              <h2 className="text-xl font-semibold mb-2 text-center">{article.title}</h2>
              {/* Utilisation du composant Image pour optimiser l'image */}
              {article.image && (
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  width={600} 
                  height={400} 
                  className="rounded-lg"
                  loading="lazy"  
                />
              )}
              <a 
                href={`/blog/${article.id}`} 
                className="mt-4 bg-white text-yellow-500 font-medium py-2 px-6 rounded hover:bg-yellow-200"
              >
                Voir plus
              </a>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center mt-6">
      <div className="h-2 w-6 bg-green-600 rounded-full mx-1"></div>
      <div className="h-2 w-6 bg-gray-300 rounded-full mx-1"></div>
      <div className="h-2 w-6 bg-gray-300 rounded-full mx-1"></div>
    </div>

    </div>
  );
}
