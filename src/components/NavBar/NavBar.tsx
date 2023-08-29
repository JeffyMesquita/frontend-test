import Link from "next/link";

export function NavBar() {
  return (
    <nav className="w-full h-auto">
      <ul className="flex justify-between items-center w-full p-4">
        <li>
          <Link href="/" className="block">
            Clima
          </Link>
        </li>
        <li>
          <Link href="/streetSearch">Procurar Ruas</Link>
        </li>
        <li>
          <Link href="/contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}
