"use client"

import { useState } from 'react';

function CreateArticleForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null); // Stocke le fichier sélectionné
    const [author, setAuthor] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('author', author);
        if (image) {
            formData.append('image', image); // Ajoute le fichier image au FormData
        }

        try {
            const response = await fetch('/api/articles', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const newArticle = await response.json();
                console.log('Article créé:', newArticle);
                // Optionnel : Réinitialiser les champs du formulaire après la création
                setTitle('');
                setDescription('');
                setImage(null);
                setAuthor('');
            } else {
                console.error('Erreur lors de la création de l\'article');
            }
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <label>
                Titre:
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            <label>
                Description:
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>
            <label>
                Image:
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                />
            </label>
            <label>
                Auteur:
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Créer larticle</button>
        </form>
    );
}

export default CreateArticleForm;
