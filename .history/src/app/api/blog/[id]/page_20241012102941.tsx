import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (req.method === 'GET') {
        try {
            // Récupérer un article spécifique depuis la base de données
            const article = await prisma.article.findUnique({
                where: {
                    id: parseInt(id as string),
                },
            });

            if (article) {
                res.status(200).json(article);
            } else {
                res.status(404).json({ message: "Article no trouv" });
            }
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'article:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    } else if (req.method === 'DELETE') {
        try {
            // Supprimer un article spécifique
            const deletedArticle = await prisma.article.delete({
                where: {
                    id: parseInt(id as string),
                },
            });

            res.status(200).json(deletedArticle);
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'article:', error);
            if (error.code === 'P2025') { // Prisma renvoie cette erreur si l'article n'existe pas
                res.status(404).json({ message: "Article not found" });
            } else {
                res.status(500).json({ message: 'Erreur interne du serveur' });
            }
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
