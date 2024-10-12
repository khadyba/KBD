"use client"
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [info, setInfo] = useState( '' )

  return (

    <>
            {children}
            <input value={info} onChange={(e)=> setInfo(e.target.value)} />
    </>
    
  );
}