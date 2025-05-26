'use client';

import Image from "next/image";
import Link from "next/link";

// Página inicial simples, sem login, com navbar, conteúdo e rodapé
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)] bg-gray-50 dark:bg-gray-900">
      {/* Navbar fixa no topo */}
      <header className="w-full bg-white dark:bg-gray-800 shadow-md py-4 px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logo do site */}
          <Image src="/next.svg" alt="Logo" width={40} height={40} />
          <span className="font-bold text-lg text-gray-800 dark:text-gray-100">MasterPlaceSites</span>
        </div>
        {/* Links de navegação */}
        <nav className="flex gap-6">
          <Link href="/" className="text-gray-700 dark:text-gray-200 hover:underline">Home</Link>
          <Link href="/sobre" className="text-gray-700 dark:text-gray-200 hover:underline">Sobre</Link>
          <Link href="/contato" className="text-gray-700 dark:text-gray-200 hover:underline">Contato</Link>
          {/* Link para página de login (a ser criada depois) */}
          <Link href="/login" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Login</Link>
        </nav>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Bem-vindo ao MasterPlaceSites!
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Seu portal para criar e gerenciar sites de forma simples e eficiente.
        </p>
        {/* Imagem ilustrativa */}
        {/*
        <Image
          src="/vercel.svg"
          alt="Ilustração"
          width={120}
          height={120}
          className="mx-auto mb-8 dark:invert"
        />
        */}
        
        {/* Botão de ação (exemplo) */}
        <Link
          href="/sobre"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow transition"
        >
          Saiba mais
        </Link>
      </main>

      {/* Rodapé */}
      <footer className="bg-white dark:bg-gray-800 py-4 text-center text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} MasterPlaceSites. Todos os direitos reservados.
      </footer>
    </div>
  );
}