"use client"
import { useRouter } from "next/navigation";

const Contact = () => {

    const router = useRouter();
    const handleSendContactForm = () => {
        console.log("Envoi du formulaire de contact");
        // Rediriger l'utilisateur vers l'accueil 
        router.push('/');
    };
    return (
        <div>
            <h1>Contactez-nous</h1>
            <form onSubmit={handleSendContactForm}>
                {/* Ajoutez vos champs de formulaire ici */}
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default Contact
