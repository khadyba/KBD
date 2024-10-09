import Link from "next/link"
import { articles } from "../datas"
import { Article } from "../types"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "KBD Numérique - Le Blog",
    description: "Amoureuse des mots et exploratrice de nouvelles idées",
};

export default function BlogPage() {
    return (
        <>
            {articles.map((article: Article) => {
                
                const link = `blog/${article.id}`
                return (
                    <div key={article.id} style={{
                        padding: '1rem'
                    }}>
                        <h2>{article.title} le {article.date} par {article.author}</h2>
                        <Link style={{color: 'blue'}} href={link}>Voir l&apos;article</Link>
                    </div>
                )
            })}
        </>
    )
}