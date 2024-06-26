import Image from "next/image";

interface TeamCardProps {
  img: string;
  name: string;
  position: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ img, name, position }) => {
  return (
    <div className="relative w-full">
      <div className="relative mx-auto h-[121px] w-[110px] lg:h-[360px] lg:w-[320px] xl:h-[400px] xl:w-[353px]">
        <Image src={img} alt={name} fill className="object-cover" />
      </div>
      <div className="absolute -bottom-10 left-1/2 w-[100px] -translate-x-1/2 border-t-2 border-t-orange-20 bg-white py-2 text-center text-black md:w-[284px] md:pb-3 md:pt-8">
        <span className="whitespace-nowrap text-xs md:text-2xl">{name}</span>
        <p className="whitespace-nowrap text-xs md:text-lg">{position}</p>
      </div>
    </div>
  );
};

export default TeamCard;
