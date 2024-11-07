"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const navlinks = [
    { name: "Acceuil", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
]

const Headers = () => {
    const pathname = usePathname()
    return (
        <header className="p-4 flex items-center " style={{backgroundColor: "#D5AF4F"}}>
            {/* Logo  */}
            <div className="flex items-center">
                <Image 
                    src="/logo.svg" 
                    alt="Logo La Plume Stratégique"
                    width={250} 
                    height={50} 
                    className="mr-4"
                />
            </div>
            {/* Liens de navigation*/}
            <nav className="mr-auto  ">
                <ul className="flex space-x-10 text-[20px]">
                    {navlinks.map((link) => {

                        // const isActive = pathname.startsWith(link.href)
                        const isActive = pathname === link.href
                        return (
                            <li key={link.name}>
                                <Link 
                                    href={link.href}
                                    className={
                                        isActive 
                                            ? "text-[#164908] font-bold"
                                            : "text-white hover:text-[#76c260] font-bold"
                                    }
                                >
                                    {link.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
             {/* Barre de recherche */}
             <div className="flex items-center">
                <div className="relative ">
                    <input 
                        type="text" 
                        placeholder="recherche" 
                        className="rounded-full px-4 py-1 text-[#D5AF4F] bg-white placeholder-yellow-600"
                    />
                    <span className="absolute top-1/2 right-3 transform -translate-y-1/2">
                        <Image 
                            src="/loupe.svg" 
                            alt="Icone de recherche"
                            width={25} 
                            height={15} 
                            className="text-[#D5AF4F]"
                        />
                    </span>
                </div>
            </div>
        </header>
    )
}
export default Headers
