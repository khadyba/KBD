// "use client"; 

// import { useState, useEffect } from "react";
// import { Article } from "../types";


// export default function BlogPage() {
//     const [articles, setArticles] = useState<Article[]>([]); 


//     const fetchArticles = async () => {
//         try {
//             const response = await fetch('/api/blog');
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             const data = await response.json();
//             console.log( data); 
//             setArticles(data);
//         } catch (error) {
//             console.error('Erreur lors de la récupération des articles:', error);
//         }
//     };
    
    
//     useEffect(() => {
//         fetchArticles();
//     }, [])


//     return (
//         <>
//             <h1>Liste des articles</h1>
//             {/* Affichez la liste des articles */}
//             {articles.map((article) => (
//                 <div key={article.id} style={{ padding: '1rem' }}>
//                     <h2>{article.title} </h2>
//                 </div>
//             ))}
//         </>
//     );
// }

"use client"
import { useState, useEffect } from "react";
import { Article } from "../types";
export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([])

  const fetchArticles = async () => {
    try {
      const response = await fetch('/api/blog');
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des articles:', error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <h1>Liste des articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <h2>{article.title}</h2>

          <p>Par {article.author} le {article.date}</p>
        </div>
      ))}
    </>
  );
}
