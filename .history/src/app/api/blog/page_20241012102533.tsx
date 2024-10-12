// /pages/api/blog/index.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const articles = await prisma.article.findMany();
    res.status(200).json(articles);
  } else if (req.method === 'POST') {
    const { title, author, description } = req.body;
    const newArticle = await prisma.article.create({
      data: { title, author, description ,},
    });
    res.status(201).json(newArticle);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
