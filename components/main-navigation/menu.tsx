import { menuInfo, services } from "@/constants/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Menu = ({ setIsOpen }: { setIsOpen: () => void }) => {
  return (
    <aside className="h-screen w-full bg-[#2A2A2A] bg-[url(../public/images/shared/menu-bg.png)] bg-cover bg-right bg-no-repeat lg:w-[590px] lg:bg-cover">
      <p className="bg-black py-10 pl-6 text-xs font-extralight tracking-[3.36px] text-white lg:text-[28px]">
        Modality IT Tech Support
      </p>
      <p className="mt-7 pl-6 text-base font-extrabold text-white lg:mt-[77px] lg:text-lg">
        Our Services
      </p>
      <div className="mx-auto my-5 flex w-full max-w-[90%] flex-wrap gap-2 lg:my-12 lg:max-w-[508px]">
        {services.map((service, index) => (
          <Link
            href={service.path}
            key={service.name}
            onClick={setIsOpen}
            className={cn(
              "bg-grey-20 py-2 text-center text-xs font-normal transition hover:text-orange-20 lg:py-5 lg:text-base lg:font-extrabold",
              index === 0 || index === 1 || index === 5 || index === 6
                ? "w-[48%] lg:w-[250px]"
                : "w-[31.2%] lg:w-[164px]",
            )}
          >
            {service.name}
          </Link>
        ))}
      </div>
      <p className="mt-8 pl-6 text-base font-extrabold text-white lg:text-lg">
        Need IT Help?
      </p>
      <ul className="mt-3 space-y-6 pb-7 pl-5 lg:mt-8">
        {menuInfo.map((item) => (
          <li
            key={item.text}
            className="flex items-center gap-x-2 text-base text-white lg:text-base"
          >
            <div className="relative size-5 lg:size-6">
              <Image src={item.icon} alt={item.text} fill />
            </div>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Menu;
