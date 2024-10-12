

export async function GET( request : Request,{ params}:{ params: { id:string }}){
      const article = articles.find((article) => article.id === parseInt(params.id))
      return Response.json(article)
    }

    export async function PATCH(request: Request, { params }: { params: { id: string } }) {
      const body = await request.json();
      const { title, description, date, author } = body;
      const index = articles.findIndex((article) => article.id === parseInt(params.id));
      if (index !== -1) {
        articles[index].title = title || articles[index].title; 
        articles[index].description = description || articles[index].description;
        articles[index].date = date || articles[index].date;
        articles[index].author = author || articles[index].author;
        return  Response.json(articles[index]);
      } else {
        return  Response.json({ error: "Article non trouvé" }), { status: 404 };
      }
    }
    
    export async function DELETE(request: Request, { params }: { params: { id: string } }) {
      const index = articles.findIndex((article) => article.id === parseInt(params.id, 10));
      if (index === -1) {
          return new Response(JSON.stringify({ message: "Article not found" }), {
              status: 404,
              headers: { "Content-Type": "application/json" },
          });
      }
      const deletedArticle = articles.splice(index, 1)[0];
      return new Response(JSON.stringify(deletedArticle), {
          status: 200,
          headers: { "Content-Type": "application/json" },
      });
  }
  