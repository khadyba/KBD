// /pages/api/blog/[id].ts

import { NextApiRequest, NextApiResponse } from 'next';

let articles = [
  { id: 1, title: "Article 1", author: "Author 1", date: "2024-01-01" },
  { id: 2, title: "Article 2", author: "Author 2", date: "2024-01-02" },
];

// Gérer les requêtes GET et DELETE
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const articleIndex = articles.findIndex((article) => article.id === parseInt(id as string));

  if (req.method === 'GET') {
    // Récupérer un article spécifique
    if (articleIndex !== -1) {
      res.status(200).json(articles[articleIndex]);
    } else {
      res.status(404).json({ message: "Article not found" });
    }
  } else if (req.method === 'DELETE') {
    // Supprimer un article spécifique
    if (articleIndex !== -1) {
      const deletedArticle = articles.splice(articleIndex, 1);
      res.status(200).json(deletedArticle);
    } else {
      res.status(404).json({ message: "Article not found" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
