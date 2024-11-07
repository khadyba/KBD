"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline';


const navlinks = [
    { name: "Acceuil", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
]

const Headers = () => {
    const pathname = usePathname()

    const [isMenuOpen, setIsMenuOpen] = useState(false)
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }
  
    return (
      <header className="p-5 flex items-center shadow-xl" style={{ backgroundColor: "#D5AF4F" }}>

        {/* Logo */}
        <div className="flex items-center mx-10">
          <Image
            src="/logo.svg"
            alt="Logo La Plume Stratégique"
            width={260}
            height={50}
            className="mr-4"
          />
        </div>
  
      {/* Menu burger */}
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="text-white">
          <Bars3Icon className="w-10 h-10" />
        </button>
      </div>

      {/* Liens de navigation */}
      <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:flex lg:flex-row lg:space-x-10 absolute top-full left-0 right-0 bg-[#D5AF4F] lg:relative`}
      >
        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10 text-[20px] gap-20">
          {navlinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={
                    isActive
                      ? 'text-[#164908] font-bold'
                      : 'text-white hover:text-[#76c260] font-bold'
                  }
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
  
        {/* Barre de recherche */}
        <div className={`relative hidden lg:block ${isMenuOpen ? 'absolute top-full right-0' : 'ml-auto'}`}>
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
      </header>
    )
  }
  
  export default Headers
