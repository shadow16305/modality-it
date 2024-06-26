import Image from "next/image";
import ServiceCarousel from "./service-carousel";

const Services = () => {
  return (
    <section className="scroll-mt-20" id="services">
      <div className="relative space-y-9 overflow-hidden pl-[6.5%] text-black md:space-y-20">
        <div className="absolute -right-36 -top-36 size-[280px] md:-right-80 md:-top-96 md:size-[640px]">
          <Image src="/images/shared/shadow-ball.png" alt="ball" fill />
        </div>
        <div className="absolute -right-80 -top-96 -z-10 size-[400px] bg-orange-20 blur-[200px]" />
        <h2 className="text-lg md:text-[75px]">Check our services</h2>
        <div className="flex flex-col gap-y-8">
          <h3 className="text-xs font-bold md:text-3xl">
            Years of Experience & Optimizing Patient Flow{" "}
          </h3>
          <p className="text-xs md:text-lg">
            With years of industry experience, we've been supporting diagnostic
            clinics, ensuring their seamless operation and growth.
          </p>
          <p className="text-xs md:text-lg">
            With our tailored IT support, our aim is to streamline clinic
            workflows, expediting patient processing for swift and efficient
            care.
          </p>
        </div>
        <ServiceCarousel />
      </div>
    </section>
  );
};

export default Services;
