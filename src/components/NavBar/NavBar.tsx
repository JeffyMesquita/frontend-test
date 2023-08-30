import Link from "next/link";

export function NavBar() {
  return (
    <nav className="w-full max-w-5xl mx-auto">
      <ul className="flex justify-between items-center w-full p-2 sm:justify-end sm:gap-8">
        <li className="flex flex-col w-auto group">
          <Link
            href="/"
            className="block group-hover:text-neutral-700 transition-all duration-300"
          >
            Clima
          </Link>
          <div className="h-[2px] w-0 bg-neutral-700 group-hover:w-full transition-all duration-300" />
        </li>
        <li className="flex flex-col w-auto group">
          <Link
            href="/streetSearch"
            className="block group-hover:text-neutral-700 transition-all duration-300"
          >
            Procurar Ruas
          </Link>
          <div className="h-[2px] w-0 bg-neutral-700 group-hover:w-full transition-all duration-300" />
        </li>
        <li className="flex flex-col w-auto group">
          <Link
            href="/contact"
            className="block group-hover:text-neutral-700 transition-all duration-300"
          >
            Contato
          </Link>
          <div className="h-[2px] w-0 bg-neutral-700 group-hover:w-full transition-all duration-300" />
        </li>
      </ul>
    </nav>
  );
}
