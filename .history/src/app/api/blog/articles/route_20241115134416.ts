import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { writeFile } from 'fs/promises';
import path from 'path';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const { title, description, image, author } = await request.json();

        const newArticle = await prisma.article.create({
            data: {
                title,
                description,
                image,
                author,
            },
        });

        return NextResponse.json(newArticle, { status: 201 });
    } catch (error) {
        console.error("Erreur lors de la création de l'article:", error);
        return NextResponse.json({ message: 'Erreur interne du serveur' }, { status: 500 });
    }
}
