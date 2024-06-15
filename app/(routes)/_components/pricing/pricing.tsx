import { pricingItems } from "@/constants/constants";
import PricingCard from "./pricing-card";
import { cn } from "@/lib/utils";

const Pricing = () => {
  return (
    <section className="mx-auto mt-6 w-11/12 lg:mt-14" id="pricing">
      <h2 className="text-center text-lg font-bold uppercase text-black lg:text-[32px]">
        Pricing
      </h2>
      <div className="mt-6 flex justify-between lg:mt-14">
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
                ? "text-white bg-orange"
                : "text-orange bg-white",
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
