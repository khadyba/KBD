
import prisma from "../../../../lib/prisma"

import { Metadata } from "next";
import Image from "next/image";

import { Article } from "@/app/types"


export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    try {
        const article = await prisma.article.findUnique({
            where: { id: parseInt(params.id) },
        });

        return {
            title: article?.title || "Article non trouvé",
            description: article?.description || "Description non disponible",
        };
    } catch (error) {
        console.error("Erreur lors de la récupération de l'article pour les métadonnées:", error);
        return {
            title: "Erreur interne",
            description: "Impossible de récupérer les informations de l'article",
        };
    }
}

export default async function ArticlePage({ params }: { params: { id: string } }) {
    let article: Article | null = null;

    try {
        article = await prisma.article.findUnique({
            where: { id: parseInt(params.id) },
        });
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'article:', error);
    }

    if (!article) {
        return (
            <div style={{ padding: '1rem', color: 'red' }}>
                <h1>Article non trouvé</h1>
                <p>Désolé, l&apos;article que vous cherchez n&apos;existe pas.</p>
            </div>
        );
        
    }
    const articleDate = typeof article.createdAt === 'string' ? new Date(article.createdAt) : article.createdAt;

    return (
        <div style={{ padding: '1rem' }}>
            {/* Utilise createdAt pour afficher la date */}
            <h2>{article.title} </h2>
             {/* Utilisation du composant Image pour optimiser l'image */}
             {article.image && (
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  width={600} 
                  height={400} 
                  className="mt-2 mb-4 rounded-lg"
                  loading="lazy"  
                />
              )}
            <div>{article.description}
            <p className="text-sm text-gray-500">Publié le: {articleDate.toLocaleDateString()} </p>
            </div>

        </div>
    );
}

