"use client";
import { navbarAnimation } from "@styles/animations/animations";
import { motion } from "framer-motion";
import Link from "next/link";

export function NavBar() {
  return (
    <motion.nav
      className="w-full max-w-5xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={navbarAnimation}
    >
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
            href="/findCEP"
            className="block group-hover:text-neutral-700 transition-all duration-300"
          >
            Buscar CEP
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
    </motion.nav>
  );
}
