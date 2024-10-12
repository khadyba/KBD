// /pages/api/blog/index.ts

import { NextApiRequest, NextApiResponse } from 'next';

// Exemple d'articles en mémoire (idéalement à remplacer par une base de données)
const articles = [
  { id: 1, title: "Article 1", author: "Author 1", date: "2024-01-01" },
  { id: 2, title: "Article 2", author: "Author 2", date: "2024-01-02" },
];

// Gérer les requêtes GET et POST
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Récupérer tous les articles
    res.status(200).json(articles);
  } else if (req.method === 'POST') {
    // Ajouter un nouvel article
    const { title, author, date } = req.body;
    const newArticle = {
      id: articles.length + 1,  // Générer un nouvel id
      title,
      author,
      date,
    };
    articles.push(newArticle);
    res.status(201).json(newArticle);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
