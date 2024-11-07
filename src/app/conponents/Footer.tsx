import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#D5AF4F" }} className="p-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                {/* Texte du copyright */}
                <p className="text-white font-bold mb-4 md:mb-0 ml-[500px]">
                    ©2024 La Plume Stratégique
                </p>

                {/* Liens vers les réseaux sociaux */}
                <div className="flex gap-5 justify-center md:justify-end">
                    <Link href="/" aria-label="Facebook">
                        <Image
                            src="/Facebook.svg"
                            alt="Lien Facebook"
                            width={50}
                            height={30}
                        />
                    </Link>
                    <Link href="/" aria-label="LinkedIn">
                        <Image
                            src="/LinkedIn.svg"
                            alt="Lien LinkedIn"
                            width={50}
                            height={30}
                        />
                    </Link>
                    <Link href="/" aria-label="Instagram">
                        <Image
                            src="/Instagram.svg"
                            alt="Lien Instagram"
                            width={50}
                            height={30}
                        />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
