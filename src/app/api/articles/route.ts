import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { writeFile } from 'fs/promises';
import path from 'path';

const prisma = new PrismaClient();
export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const title = formData.get('title') as string;
        const description = formData.get('description') as string;
        const author = formData.get('author') as string;
        const imageFile = formData.get('image') as File;

        let imagePath = '';

        if (imageFile) {
            // Sauvegarde l'image localement
            const buffer = await imageFile.arrayBuffer();
            const imageName = `${Date.now()}-${imageFile.name}`;
            imagePath = `/uploads/${imageName}`;
            await writeFile(path.join(process.cwd(), 'public', imagePath), Buffer.from(buffer));
        }

        // Insère le nouvel article dans la base de données avec le chemin de l'image
        const newArticle = await prisma.article.create({
            data: {
                title,
                description,
                image: imagePath,
                author,
            },
        });

        return NextResponse.json(newArticle, { status: 201 });
    } catch (error) {
        console.error("Erreur lors de la création de l'article:", error);
        return NextResponse.json({ message: 'Erreur interne du serveur' }, { status: 500 });
    }
}
