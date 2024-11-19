import { useState } from 'react';

function CreateArticleForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api.blog/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description, image, author }),
            });

            if (response.ok) {
                const newArticle = await response.json();
                console.log('Article créé:', newArticle);
                // Optionnel : Réinitialiser les champs du formulaire après la création
                setTitle('');
                setDescription('');
                setImage('');
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
                Image URL:
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
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
            <button type="submit">Créer l&apos;article</button>
        </form>
    );
}

export default CreateArticleForm;
