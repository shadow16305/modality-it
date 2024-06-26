import { cn } from "@/lib/utils";
import Image from "next/image";

interface PricingCardProps {
  size: string;
  paragraph: string;
  workstationAmount: string;
  price: number;
  imgSrc: string;
  containerClassName?: string;
  priceClassName?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  size,
  paragraph,
  workstationAmount,
  price,
  imgSrc,
  containerClassName,
  priceClassName,
}) => {
  return (
    <div
      className={cn(
        "h-[230px] rounded-lg pt-3 md:w-[32%] lg:h-fit lg:w-[32.5%] lg:pt-0 2xl:w-[30%]",
        containerClassName,
      )}
    >
      <h3 className="text-center text-[15px] lg:text-3xl">{size} Clinic</h3>
      <p className="mt-3 text-center text-xs md:px-2 lg:mt-4 lg:text-base">
        {paragraph}
      </p>
      <div className="mt-3 flex flex-col items-center lg:mt-7">
        <span className="text-xs font-extrabold lg:text-sm">
          {workstationAmount} Workstations
        </span>
        <span
          className={cn(
            "mt-7 w-full p-1 text-center text-xs font-semibold md:mt-3 md:w-fit md:rounded-lg lg:p-2 lg:text-xl",
            priceClassName,
          )}
        >
          $ {price}/month
        </span>
      </div>
      <div className="relative mx-auto h-[88px] w-full lg:mt-14 lg:h-[274px] lg:w-11/12">
        <Image
          src={imgSrc}
          alt={size}
          fill
          className="rounded-b-lg object-cover md:rounded-t-md lg:rounded-lg"
        />
      </div>
    </div>
  );
};

export default PricingCard;
