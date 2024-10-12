export interface Article {
    id: number;
    title: string;
    description: string;
    author: string;
    createdAt: Date;
    image?: string | null
}