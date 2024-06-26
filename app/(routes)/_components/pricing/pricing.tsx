import { pricingItems } from "@/constants/constants";
import PricingCard from "./pricing-card";
import { cn } from "@/lib/utils";
import PricingCarousel from "./pricing-carousel";

const Pricing = () => {
  return (
    <>
      <section
        className="mx-auto mt-6 w-11/12 scroll-mt-32 lg:mt-14"
        id="pricing"
      >
        <h2 className="text-center text-lg font-bold uppercase text-black lg:text-[32px]">
          Pricing
        </h2>
        <div className="mt-6 hidden justify-between md:flex lg:mt-14">
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
                  ? "bg-black text-white lg:py-5"
                  : "bg-grey-20 lg:py-3",
              )}
              priceClassName={cn(
                item.size === "Medium"
                  ? "text-white bg-orange-20"
                  : "text-orange-20 bg-white",
              )}
            />
          ))}
        </div>
      </section>
      <div className="mt-6 bg-[#888] py-4 md:hidden">
        <PricingCarousel />
      </div>
    </>
  );
};

export default Pricing;
