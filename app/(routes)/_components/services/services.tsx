import Image from "next/image";
import ServiceCarousel from "./service-carousel";

const Services = () => {
  return (
    <section
      id="services"
      className="relative space-y-20 overflow-hidden pl-[6.5%] text-black"
    >
      <div className="absolute -right-80 -top-96 size-[640px]">
        <Image src="/images/shared/shadow-ball.png" alt="ball" fill />
      </div>
      <div className="bg-orange-20 absolute -right-80 -top-96 -z-10 size-[400px] blur-[200px]" />
      <h2 className="text-[75px]">Check our services</h2>
      <div className="flex flex-col gap-y-8">
        <h3 className="text-3xl font-bold">
          Years of Experience & Optimizing Patient Flow{" "}
        </h3>
        <p className="text-lg">
          With years of industry experience, we've been supporting diagnostic
          clinics, ensuring their seamless operation and growth.
        </p>
        <p className="text-lg">
          With our tailored IT support, our aim is to streamline clinic
          workflows, expediting patient processing for swift and efficient care.
        </p>
      </div>
      <ServiceCarousel />
    </section>
  );
};

export default Services;
