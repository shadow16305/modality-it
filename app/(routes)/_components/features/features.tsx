import Image from "next/image";
import List from "./list";
import Link from "next/link";

const Features = () => {
  return (
    <section className="relative mt-7 overflow-hidden bg-black py-5 md:mt-[135px] md:py-28">
      <div className="absolute left-0 hidden size-[900px] lg:block">
        <Image src="/images/shared/gradient.png" alt="gradient circle" fill />
      </div>
      <div className="absolute -top-64 right-0 hidden size-[900px] rotate-180 lg:block">
        <Image src="/images/shared/gradient.png" alt="gradient circle" fill />
      </div>
      <div className="mx-auto w-11/12 text-white md:w-[87%]">
        <div className="relative z-10 flex justify-between">
          <h2 className="text-xl leading-[110%] md:max-w-[670px] md:text-6xl xl:max-w-[800px] xl:text-[75px]">
            For a <span className="text-orange-20">flat-monthly fee,</span>{" "}
            here’s what you get
          </h2>
          <Link
            href="#contact"
            className="flex h-[50px] items-center whitespace-nowrap rounded-lg bg-white/20 px-2 text-xs backdrop-blur-md md:h-[105px] md:px-16 md:text-lg xl:px-20"
          >
            Get free consultation
          </Link>
        </div>
        <List />
      </div>
      <div className="mt-2.5 flex w-full justify-between md:mt-12">
        <div className="relative z-10 h-3 w-[47%]">
          <Image src="/images/shared/line.png" alt="line" fill />
        </div>
        <div className="relative z-10 h-3 w-[47%]">
          <Image
            src="/images/shared/line.png"
            alt="line"
            fill
            className="rotate-180"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
