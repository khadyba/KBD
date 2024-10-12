import { useState, useEffect } from "react";

export default function BlogPage() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await fetch('/api/blog');
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des articles:', error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <h1>Liste des articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>Par {article.author} le {article.date}</p>
        </div>
      ))}
    </>
  );
}
