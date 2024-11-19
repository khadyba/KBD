"use client"

import { useRouter } from "next/navigation";

const Contact = () => {
    const router = useRouter();

    const handleSendContactForm = (e) => {
        e.preventDefault();
        console.log("Envoi du formulaire de contact");
        router.push('/');
    };

    return (
        <section className="py-12 w-full lg:px-24 flex flex-col items-center">
            <h1 className="text-[45px] font-bold text-center text-[#67245B] mb-12">Contact</h1>

            <div className="flex flex-col lg:flex-row gap-10 justify-center items-start w-full">
                {/* Formulaire de contact */}
                <div className="bg-[#EDD9A3] rounded-lg p-8 lg:w-1/2 shadow-md">
                    <h2 className="text-center text-white font-bold mb-6">Envoyez-moi un message</h2>
                    <form onSubmit={handleSendContactForm} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Nom"
                            className="w-full p-3 rounded-lg bg-[#F1F8F9] focus:outline-none"
                            required
                        />
                        <input
                            type="email"
                            placeholder="E-mail"
                            className="w-full p-3 rounded-lg bg-[#F1F8F9] focus:outline-none"
                            required
                        />
                        <textarea
                            placeholder="Message"
                            className="w-full p-3 rounded-lg bg-[#F1F8F9] focus:outline-none"
                            rows=4
                            required
                        />
                        <button
                            type="submit"
                            className="w-full p-3 bg-[#F1F8F9] text-[#EDD9A3] font-bold rounded-lg hover:bg-[#e0d0a3] transition-colors"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>

                {/* Informations de contact */}
                <div className="bg-[#EDD9A3] rounded-lg p-8 lg:w-1/2 shadow-md text-center">
                    <h2 className="text-white font-bold mb-6">Contactez-moi</h2>
                    <div className="text-[#F5D67D] space-y-4">
                        <div className="flex items-center justify-center gap-2">
                            <i className="fas fa-phone"></i>
                            <span>77 000 00 00</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Sénégal, Dakar</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <i className="fas fa-envelope"></i>
                            <span>exemple@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
