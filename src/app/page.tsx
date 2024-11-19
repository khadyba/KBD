import Image from 'next/image'
import Link from "next/link";



export default function Home() {
  return (

  <section className="py-12 w-full lg:px-24 items-center ">
  {/* Titre principal */}
  <h2 className="text-[45px] font-instrument font-bold text-center text-[#67245B] mb-12">
    Lisez-le sur le blog
  </h2>

  {/* Contenu de la section */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">

    {/* Article de blog 1 */}
    <div className="text-center md:text-left flex flex-col w-full">
      <h3 className="font-bold text-[20px] font-instrument text-[#67245B] mb-4">
        L&apos;ultime guide de rédaction
      </h3>
      <p className="text-[#1B1A1C] mb-4 font-instrument font-normal text-[18px] max-w-full lg:max-w-[500px]">
        Bien écrire est un art. Commencez par utiliser des expressions simples
         et de tous les jours que les gens peuvent facilement comprendre.
        Soyez clair et allez à l’essentiel. Faites en sorte que vos arguments s&apos;
        enchaînent logiquement et soyez concis sauf si vous écrivez un essai.
      </p>
      <div className="overflow-hidden mt-4">
        <Image
          src="/stylo.svg" 
          alt="Stylo et encre"
          width={400}
          height={200}
          className="w-full max-w-[400px]"
        />
      </div>
    </div>

    {/* Image centrale avec texte au-dessous - Affiché en premier sur mobile */}
    <div className="flex flex-col items-center order-first lg:order-none w-full">
      <Image
        src="/copywritng.svg" 
        alt="Bloc-notes Copywriting"
        width={440}
        height={220}
        className="rounded-lg w-full max-w-[440px]"
      />
      <div className="text-center md:text-left">
        <h3 className="font-bold text-[20px] font-instrument text-[#67245B] mb-4">
          L&apos;ultime guide de rédaction
        </h3>
        <p className="text-[#1B1A1C]  font-instrument font-normal text-[18px] max-w-full lg:max-w-[500px]">
        Vos idées doivent avoir un objectif, vous devez donc choisir les mots qui les expriment le mieux. 
        Veillez à ce que votre grammaire soit irréprochable car elle a un impact sur votre crédibilité. 
        Utilisez la voix active si possible car cela facilite la lecture de votre texte.
        </p>
      </div>
    </div>

    {/* Article de blog 2 */}
    <div className="text-center md:text-left flex flex-col w-full ml-auto">
      <h3 className="font-bold text-[20px] font-instrument text-[#67245B] mb-4">
        L&apos;ultime guide de rédaction
      </h3>
      <p className="text-[#1B1A1C] mb-4 font-instrument font-normal text-[18px] max-w-full lg:max-w-[500px]">
        Bien écrire est un art. Commencez par utiliser des expressions simples et
        de tous les jours que les gens peuvent facilement comprendre.
        Soyez clair et allez à l’essentiel. Faites en sorte que vos arguments s&apos;
        enchaînent logiquement et soyez concis sauf si vous écrivez un essai.
      </p>
      <div className="overflow-hidden mt-4">
        <Image
          src="/stylo.svg" 
          alt="Stylo et encre"
          width={400}
          height={200}
          className="w-full max-w-[400px]"
        />
      </div>
    </div>

  </div>

  {/* Bouton "Voir les articles" */}
  <div className="bg-[#D5AF4F] hover:bg-yellow-700 h-[55px] w-[225px] flex  items-center justify-center mx-auto rounded-[15px]">
    <Link href="/blog" className="text-white font-semibold text-center">
      Voir les articles
    </Link>
  </div>

</section>
  );
}

