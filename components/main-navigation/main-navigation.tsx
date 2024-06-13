import Image from "next/image";
import Link from "next/link";

import { navLinks } from "@/constants/constants";

const MainNavigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white py-8">
      <div className="mx-auto flex w-11/12 items-center justify-between">
        <Image
          src="/images/shared/logo.svg"
          alt="modality it"
          width={150}
          height={22}
        />
        <ul className="flex items-center gap-x-8 text-base">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="font-semibold transition hover:text-orange"
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;
