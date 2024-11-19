"use client"
import { useRouter } from "next/navigation";

const Contact = () => {

    const router = useRouter();
    const handleSendContactForm = () => {
        console.log("Envoi du formulaire de contact");
        router.push('/');
    };
    return (


        <section className="py-12 w-full lg:px-24 items-center ">

            <h1 className="text-[45px] font-instrument font-bold text-center text-[#67245B] mb-12">Contactez-nous</h1>

        <div>

            <form onSubmit={handleSendContactForm}>

                
                {/* Ajoutez vos champs de formulaire ici */}
                <button type="submit">Envoyer</button>
            </form>



        </div>



        </section>
    );
}

export default Contact
