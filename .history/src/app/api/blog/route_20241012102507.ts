
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        // Récupérer tous les articles depuis la base de données
        const articles = await prisma.article.findMany();
        return new Response(JSON.stringify(articles), {
            headers: {
                "Content-Type": "application/json"
            },
            status: 200
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des articles:', error);
        return new Response(JSON.stringify({ message: 'Erreur interne du serveur' }), {
            status: 500
        });
    }
}

export async function POST(request: Request) {
    try {
        const { title, description, date, author } = await request.json();

        // Insérer un nouvel article dans la base de données
        const newArticle = await prisma.article.create({
            data: {
                title: title,
                description: description,
                date: new Date(date),
                author: author
            }
        });

        return new Response(JSON.stringify(newArticle), {
            headers: {
                "Content-Type": "application/json"
            },
            status: 201
        });

    } catch (error) {
        console.error('Erreur lors de la création de l\'article:', error);
        return new Response(JSON.stringify({ message: 'Erreur interne du serveur' }), {
            status: 500
        });
    }
}