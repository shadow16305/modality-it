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
    <div className="bg-grey-20 flex w-[500px] flex-col gap-y-6 rounded-md px-6 py-6">
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
