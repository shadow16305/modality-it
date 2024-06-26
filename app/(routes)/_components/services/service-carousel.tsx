import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carouselItems } from "@/constants/constants";
import CarouselCard from "./carousel-card";

const ServiceCarousel = () => {
  return (
    <Carousel>
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} className="basis-[46%] md:basis-1/3">
            <CarouselCard
              icon={item.iconPath}
              title={item.title}
              description={item.paragraph}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute -top-14 right-[6.5%] hidden space-x-4 md:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default ServiceCarousel;
