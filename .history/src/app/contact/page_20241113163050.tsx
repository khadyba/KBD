"use client"

import { useRouter } from "next/navigation";

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

            <div className="flex flex-col lg:flex-row gap-10 justify-center items-start w-full">


                {/* Formulaire de contact */}

                <div className="bg-[#EDD9A3] rounded-[20px] shadow-md flex items-center justify-center p-8">

                    <div className="bg-[#D5AF4F] w-full max-w-[500px] flex flex-col justify-center items-center text-center rounded-[20px] p-6">

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
                                className="w-full p-3  rounded-[10px] bg-[#F1F8F9] focus:outline-none placeholder-[#D5AF4F]"
                                rows={4}
                                required
                            />
                            <button
                                type="submit"
                                className="w-full p-3 bg-[#F1F8F9] text-[#D5AF4F] font-bold  rounded-[10px] hover:bg-[#e0d0a3] transition-colors"
                            >
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>





                {/* Informations de contact */}
                <div className="bg-[#EDD9A3] rounded-[20px] p-8 lg:w-1/2 shadow-md flex flex-col items-center justify-center w-[">

                    <div className="bg-[#D5AF4F] w-full max-w-[500px]  rounded-t-[10px] py-3">
                        <h2 className="text-white font-bold text-center text-[20px]">contactez-moi</h2>
                    </div>
                    
                    <div className="text-[#F5D67D] bg-white w-full max-w-[500px] p-6 flex flex-col gap-4 items-center rounded-b-[10px]">
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
