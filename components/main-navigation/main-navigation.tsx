"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { navLinks } from "@/constants/constants";
import Hamburger from "./hamburger";
import Menu from "./menu";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white py-8">
        <div className="relative mx-auto flex w-11/12 items-center justify-between">
          <Image
            src="/images/shared/logo.svg"
            alt="modality it"
            width={150}
            height={22}
          />
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-x-8 text-base lg:flex">
            {navLinks.map((link) => (
              <li
                key={link.name}
                onClick={() => setIsOpen(false)}
                className="hover:text-orange-20 group relative font-semibold transition"
              >
                <Link href={link.path}>{link.name}</Link>
                <span className="bg-orange-20 absolute bottom-0 left-0 h-0.5 w-0 rounded-3xl transition-all group-hover:w-full" />
              </li>
            ))}
          </ul>
          <Hamburger isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
        </div>
        <AnimatePresence mode="wait">
          {isOpen && (
            <>
              <motion.div
                initial={{ x: "600px" }}
                animate={{ x: 0 }}
                exit={{ x: "600px" }}
                transition={{ type: "tween" }}
                className="fixed right-0 top-0"
              >
                <Menu setIsOpen={() => setIsOpen(false)} />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed top-0 z-40 h-screen w-screen bg-black/20 backdrop-blur-xl"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default MainNavigation;
