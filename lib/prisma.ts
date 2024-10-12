// lib/prisma.ts

import { PrismaClient } from '@prisma/client';

// Crée une instance unique de PrismaClient pour éviter les connexions multiples à la base de données
const prisma = new PrismaClient();

export default prisma;
