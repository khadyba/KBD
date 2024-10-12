"use client"
import Link from 'next/link'
import {  usePathname } from 'next/navigation'

const navlinks = [

    {
        name: "home", href: "/blog"
    },
    {
        name: "blog", href: "/blog"
    },
    {
        name: "contact", href: "/contact"
    }
     
]


const Headers = () => {

const pathname = usePathname()
console.log(pathname)

  return (
   
         <ul>
            {navlinks.map((link) => {
                const isActive = pathname.startsWith(link.href)

                return (
                    <li key={link.name}>
                        <Link 
                            href={link.href}
                            className = { isActive ? "text-green-500" : "text-blue-500" }
                            >
                              
                            {link.name}
                        </Link>
                    </li>
                )
            })}
         </ul>
   
  )
}

export default Headers
