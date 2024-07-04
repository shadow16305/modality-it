import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative mt-[93px] flex h-80 items-center bg-[url(../public/images/shared/hero-mobile.png)] bg-cover bg-center lg:h-[90vh] lg:bg-[url(../public/images/shared/hero.png)]">
      <div className="absolute left-0 top-0 z-0 h-full w-full bg-black/30 backdrop-blur-sm lg:bg-black/50 lg:backdrop-blur-[8px]" />
      <div className="absolute left-0 top-1 -z-10 hidden size-[1200px] lg:block">
        <Image src="/images/shared/gradient.png" alt="gradient circle" fill />
      </div>
      <div className="relative z-10 max-w-[91%] bg-black/60 py-5 pl-[4.5%] pr-10 lg:max-w-none lg:bg-black/20 lg:py-11 lg:pr-28">
        <div className="relative space-y-5 text-white lg:space-y-7">
          <p className="text-xs leading-[15px] tracking-[0.63px] lg:max-w-[576px] lg:text-lg lg:leading-[26px]">
            An experience team, formerly employed by Canada's top RIS, & PACS
            providers, with an in-depth understanding of diagnostic clinics!
          </p>
          <h1 className="text-lg font-semibold lg:max-w-[722px] lg:text-[55px] lg:leading-[88px]">
            We are Experts Providing IT Support for Diagnostic Clinics!
          </h1>
          <button
            type="button"
            className="rounded-lg bg-orange-20 px-8 py-1 text-xs leading-[28.5px] tracking-[0.7px] transition hover:bg-opacity-90 lg:px-32 lg:py-3 lg:text-xl"
          >
            (647) 227-5559
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
