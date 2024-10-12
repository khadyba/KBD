

const articles = [
    { id: 1, title: "Article 1", author: "Author 1", date: "2024-01-01" },
    { id: 2, title: "Article 2", author: "Author 2", date: "2024-01-02" },
  ];

export async function GET() {

    return Response.json(articles);
    
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