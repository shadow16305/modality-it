import { pricingItems } from "@/constants/constants";
import PricingCard from "./pricing-card";
import { cn } from "@/lib/utils";
import PricingCarousel from "./pricing-carousel";
import Image from "next/image";

const Pricing = () => {
  return (
    <>
      <section
        className="relative mx-auto mt-6 scroll-mt-32 lg:mt-0"
        id="pricing"
      >
        <h2 className="text-center text-lg font-bold uppercase text-black lg:py-8 lg:text-[32px]">
          Pricing
        </h2>
        <div className="bg-white lg:py-6">
          <div className="mx-auto hidden w-11/12 justify-between md:flex">
            {pricingItems.map((item) => (
              <PricingCard
                key={item.size}
                size={item.size}
                paragraph={item.paragraph}
                workstationAmount={item.workstationAmount}
                price={item.price}
                imgSrc={item.imgPath}
                containerClassName={cn(
                  item.size === "Medium"
                    ? "bg-black text-white lg:pt-5"
                    : "bg-grey-20 lg:pt-3",
                )}
                priceClassName={cn(
                  item.size === "Medium"
                    ? "text-white bg-orange-20"
                    : "text-orange-20 bg-white",
                )}
              />
            ))}
          </div>
        </div>
        <div className="absolute -bottom-48 right-0 -z-10 hidden h-[600px] w-[1200px] rotate-180 lg:block">
          <Image src="/images/shared/gradient.png" alt="gradient circle" fill />
        </div>
      </section>

      <div className="mt-6 bg-[#888] py-4 md:hidden">
        <PricingCarousel />
      </div>
    </>
  );
};

export default Pricing;
