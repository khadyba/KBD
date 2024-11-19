"use client";
import { useState, useEffect } from "react";
import { Article } from "../types";
import Image from 'next/image';

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0); 

  const articlesPerPage = 2; 

  const fetchArticles = async () => {
    try {
      const response = await fetch('/api/blog');
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      setError('Erreur lors de la récupération des articles');
      console.error('Erreur lors de la récupération des articles:', error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // Calcul des articles visibles
  const startIndex = currentPage * articlesPerPage;
  const visibleArticles = articles.slice(startIndex, startIndex + articlesPerPage);

  // Gestion du changement de page
  const handlePageChange = (index: number) => {
    setCurrentPage(index);
  };

  return (
        <section className="py-10">
                <div className="p-8">
                <h1 className="text-3xl text-[45px] font-bold text-center mb-8 text-[#67245B]">Articles du blog</h1>

                {error && <p style={{ color: "red" }}>{error}</p>}

                {articles.length === 0 && !error ? (
                  <p className="text-center text-gray-500">Aucun article disponible.</p>
                ) : (
                  <div className="flex justify-center items-center">
                    {/* Conteneur des articles */}

                    <div className="grid grid-cols-1 md:grid-cols-2 space-x-10 gap-8 md:gap-8 max-w-[1200px]">

                      {visibleArticles.map((article) => (
                      <div
                      key={article.id}
                      className="bg-[#D5AF4F] rounded-[20px] overflow-hidden shadow-lg p-4 flex flex-col "
                      style={{ width: "600px", height: "500px" }} 
                    >
                      {/* Image centrée */}
                      <div className="flex flex-col justify-center items-center ">
                      {/* Titre aligné à gauche */}
                      <div className="text-left mr-[150px]"> 
                      <h2 className="text-xl text-[20px]  font-bold  text-white ">
                        {article.title}
                      </h2>
                      </div>
                        {article.image && (
                          <Image
                            src={article.image}
                            alt={article.title}
                            width={500}
                            height={460}
                            className="rounded-[15px] "
                            loading="lazy"
                          />
                        )}
                      </div>
                          {/* Bouton aligné à droite */}
                          <div className="flex justify-end mt-4 mr-10 ">
                            <a
                              href={`/blog/${article.id}`}
                              className="bg-white text-[#D5AF4F] text-center font-medium py-2 px-6 rounded-[10px] hover:bg-[#eee1be] w-[150px]"
                            >
                              Voir plus
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>


                  </div>
                )}

                {/* Pagination */}
                <div className="flex justify-center mt-10">
                  {Array.from({ length: Math.ceil(articles.length / articlesPerPage) }, (_, index) => (
                    <button
                      key={index}
                      className={`h-[10px] w-[50px] rounded-full mx-1 ${
                        index === currentPage ? "bg-[#164908]" : "bg-gray-300"
                      }`}
                      onClick={() => handlePageChange(index)}
                    />
                  ))}
                </div>
                  </div>
        </section>

  );
}
