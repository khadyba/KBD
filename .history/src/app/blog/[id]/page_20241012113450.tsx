// import { articles } from "@/app/datas";
// import { Metadata } from "next";

// export function generateMetadata({ params }: { params: { id: string }}): Metadata {
//     const article = articles.find((element) => element.id === parseInt(params.id));
//     return {
//         title: article?.title,
//         description: article?.description
//     }
// }

// export default function ArticlePage({ params }: { params: { id: string }}) {
//     const article = articles.find((element) => element.id === parseInt(params.id));
//     return (
//         <>
//             {article &&
//                 <div style={{
//                     padding: '1rem'
//                 }}>
//                     <h2>{article.title} le {article.date} par {article.author}</h2>
//                     <div>{article.description}</div>
//                 </div>
//             }
//         </>
//     )
// }
import prisma from "/lib"

import { Metadata } from "next";
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
    // Requête asynchrone pour récupérer l'article par son ID
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
                <p>Désolé, l&apos; article que vous cherchez n&apos;existe pas.</p>
            </div>
        );
    }

    return (
        <div style={{ padding: '1rem' }}>
            <h2>{article.title} le {article.date} par {article.author}</h2>
            <div>{article.description}</div>
        </div>
    );
}
