"use client"; 

import { useState, useEffect } from "react";
import { Article } from "../types";


export default function BlogPage() {
    const [articles, setArticles] = useState<Article[]>([]); 


    const fetchArticles = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3000/api/blog');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log( data); 
            setArticles(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des articles:', error);
        }
    };
    
    
    useEffect(() => {
        fetchArticles();
    }, [])


    return (
        <>
            <h1>Liste des articles</h1>
            {/* Affichez la liste des articles */}
            {articles.map((article) => (
                <div key={article.id} style={{ padding: '1rem' }}>
                    <h2>{article.title} le {article.date} par {article.author}</h2>
                </div>
            ))}
        </>
    );
}
