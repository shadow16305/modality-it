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
    <div className="flex w-[320px] flex-col gap-y-6 rounded-md bg-grey-20 px-6 py-6 xl:w-[400px] 2xl:w-[500px]">
      <div className="flex gap-x-7">
        <Image src={icon} alt={title} width={30} height={30} />
        <span className="text-3xl">{title}</span>
      </div>
      <Separator />
      <p className="text-grey-40">{description}</p>
    </div>
  );
};

export default CarouselCard;
