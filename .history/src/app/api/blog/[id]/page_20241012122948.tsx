import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    switch (req.method) {
        case 'GET':
            try {
                const article = await prisma.article.findUnique({
                    where: {
                        id: parseInt(id as string),
                    },
                });

                if (article) {
                    res.status(200).json(article);
                } else {
                    res.status(404).json({ message: "Article not found" });
                }
            } catch (error) {
                handleError(res, error);
            }
            break;

        case 'DELETE':
            try {
                const deletedArticle = await prisma.article.delete({
                    where: {
                        id: parseInt(id as string),
                    },
                });

                res.status(200).json(deletedArticle);
            } catch (error) {
                handleError(res, error);
            }
            break;

        case 'PATCH':
            try {
                const updatedData = req.body; 
                const updatedArticle = await prisma.article.update({
                    where: {
                        id: parseInt(id as string),
                    },
                    data: updatedData,
                });

                res.status(200).json(updatedArticle);
            } catch (error) {
                handleError(res, error);
            }
            break;

        default:
            res.status(405).json({ message: "Method not allowed" });
            break;
    }
}

// Fonction générique pour gérer les erreurs
function handleError(res: NextApiResponse, error: unknown) {
  if (error instanceof Error) {
      console.error('Erreur:', error.message);
  } else {
      res.status(500).json({ message: 'Erreur inconnue' });
  }
}
