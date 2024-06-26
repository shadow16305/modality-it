import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface CarouselCardProps {
  icon: string;
  title: string;
  description: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-y-2.5 rounded-md bg-grey-20 px-2 py-6 md:w-[320px] md:gap-y-6 md:px-6 xl:w-[400px] 2xl:w-[500px]">
      <div className="flex gap-x-2.5 md:gap-x-7">
        <div className="relative h-4 w-3 md:size-[30px]">
          <Image src={icon} alt={title} fill />
        </div>
        <span className="text-xs font-semibold md:text-3xl">{title}</span>
      </div>
      <Separator />
      <p className="text-xs text-grey-40 md:text-base">{description}</p>
    </div>
  );
};

export default CarouselCard;
