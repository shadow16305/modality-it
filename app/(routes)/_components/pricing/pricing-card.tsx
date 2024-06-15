import { cn } from "@/lib/utils";
import Image from "next/image";

interface PricingCardProps {
  size: string;
  paragraph: string;
  workstationAmount: string;
  price: number;
  imgSrc: string;
  containerClassName: string;
  priceClassName: string;
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
        "h-[200px] w-[32%] rounded-lg pt-3 lg:h-fit lg:w-[32%] lg:pt-0 2xl:w-[30%]",
        containerClassName,
      )}
    >
      <h3 className="text-center text-[15px] lg:text-3xl">{size} Clinic</h3>
      <p className="mt-1 px-2 text-center text-[9px] lg:mt-4 lg:text-base">
        {paragraph}
      </p>
      <div className="mt-1 flex flex-col items-center lg:mt-7">
        <span className="text-[9px] font-extrabold lg:text-sm">
          {workstationAmount} Workstations
        </span>
        <span
          className={cn(
            "mt-3 rounded-lg p-1 text-[9px] font-semibold lg:p-2 lg:text-xl",
            priceClassName,
          )}
        >
          $ {price}/month
        </span>
      </div>
      <div className="relative mx-auto h-[74px] w-full lg:mt-14 lg:h-[274px] lg:w-11/12">
        <Image
          src={imgSrc}
          alt={size}
          fill
          className="rounded-t-md object-cover lg:rounded-lg"
        />
      </div>
    </div>
  );
};

export default PricingCard;
