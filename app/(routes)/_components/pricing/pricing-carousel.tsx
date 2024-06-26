import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { pricingItems } from "@/constants/constants";
import PricingCard from "./pricing-card";
import { cn } from "@/lib/utils";

const PricingCarousel = () => {
  return (
    <Carousel className="ml-[3.5%] md:hidden" opts={{ skipSnaps: true }}>
      <CarouselContent>
        {pricingItems.map((item, index) => (
          <CarouselItem key={index} className="basis-[48%]">
            <PricingCard
              key={item.size}
              size={item.size}
              paragraph={item.paragraph}
              workstationAmount={item.workstationAmount}
              price={item.price}
              imgSrc={item.imgPath}
              containerClassName={cn(
                item.size === "Medium" ? "bg-black text-white" : "bg-grey-20",
              )}
              priceClassName={cn(
                item.size === "Medium"
                  ? "text-white bg-orange-20"
                  : "text-orange-20 bg-white",
              )}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default PricingCarousel;
