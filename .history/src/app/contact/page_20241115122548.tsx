"use client"

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";



const Contact = () => {
    const router = useRouter();

    const handleSendContactForm = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Envoi du formulaire de contact");
        router.push('/');
    };
    

    return (
        <section className="py-12 w-full lg:px-24 flex flex-col items-center">

            <h1 className="text-[45px] font-bold text-center text-[#67245B] mb-12">Contact</h1>
            

            <div className="flex flex-col lg:flex-row gap-10 justify-center items-start w-full h-full">

                {/* Formulaire de contact */}
                <div className="bg-[#EDD9A3] rounded-[20px] shadow-md flex items-center justify-center p-8 min-h-[400px] h-full">
                    <div className="bg-[#D5AF4F] w-full max-w-[500px] flex flex-col justify-center items-center text-center rounded-[20px] p-6 h-full">
                        <h2 className="text-center text-white font-bold mb-6 text-[20px]">Envoyez-moi un message</h2>
                        <form onSubmit={handleSendContactForm} className="space-y-4 w-full px-4">
                            <input
                                type="text"
                                placeholder="Nom"
                                className="w-full p-3 rounded-[10px] bg-[#F1F8F9] focus:outline-none placeholder-[#D5AF4F]"
                                required
                            />
                            <input
                                type="email"
                                placeholder="E-mail"
                                className="w-full p-3 rounded-[10px] bg-[#F1F8F9] focus:outline-none placeholder-[#D5AF4F]"
                                required
                            />
                            <textarea
                                placeholder="Message"
                                className="w-full p-3 rounded-[10px] bg-[#F1F8F9] focus:outline-none placeholder-[#D5AF4F]"
                                rows={4}
                                required
                            />
                            <button
                                type="submit"
                                className="w-full p-3 bg-[#F1F8F9] text-[#D5AF4F] font-bold rounded-[10px] hover:bg-[#A58025] transition-colors"
                            >
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>

                    {/* Informations de contact */}
                    <div className="bg-[#EDD9A3] rounded-[20px] p-8 shadow-md flex items-center justify-center w-full max-w-[500px] h-full min-h-[485px]">
                        <div className="w-full h-full flex flex-col justify-between">
                            {/* En-tête */}
                            <div className="bg-[#D5AF4F] w-full rounded-t-[10px] py-4">
                                <h2 className="text-white font-bold text-center text-[20px]">Contactez-moi</h2>
                            </div>

                            {/* Détails de contact */}
                            <div className="text-[#F5D67D] bg-white w-full p-8 flex flex-col gap-6 items-center rounded-b-[10px] h-full">
                                {/* Téléphone */}
                                <Link href="/" className="flex justify-center items-center gap-2">
                                    <Image 
                                        src="/Phone.svg"
                                        alt="Icône de téléphone"
                                        width={30} 
                                        height={30}
                                    />
                                    <span>77 000 00 00</span>
                                </Link>
                                
                                {/* Localisation */}
                                <Link href="/" className="flex flex-col items-center gap-2">
                                    <Image 
                                        src="/Location.svg"
                                        alt="Icône de localisation"
                                        width={30} 
                                        height={30}
                                    />
                                    <span>Sénégal, Dakar</span>
                                </Link>
                                
                                {/* Email */}
                                <Link href="/" className="flex flex-col items-center gap-2">
                                    <Image 
                                        src="/Gmail.svg"
                                        alt="Icône de Gmail"
                                        width={30} 
                                        height={30}
                                    />
                                    <span>exemple@gmail.com</span>
                                </Link>
                            </div>
                        </div>
                    </div>



            </div>
        </section>
    );
}

export default Contact;
