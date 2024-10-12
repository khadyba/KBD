
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

export async function POST(request : Request) {
    const article = await request.json()
    const newArticle = {

        id: articles.length + 1,
        title : article.tile,
        description: article.description,
        date: article.date,
        author: article.author,

    }
    articles.push(newArticle)

    return new Response(JSON.stringify(newArticle), {

        headers: {

            "Content-Type": "applications/json"
        },
        status: 201
    })

}