



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