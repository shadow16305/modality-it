import Image from "next/image";

interface TeamCardProps {
  img: string;
  name: string;
  position: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ img, name, position }) => {
  return (
    <div className="relative w-full">
      <div className="relative mx-auto lg:h-[360px] lg:w-[320px] xl:h-[400px] xl:w-[353px]">
        <Image src={img} alt={name} fill />
      </div>
      <div className="absolute -bottom-10 left-1/2 w-[284px] -translate-x-1/2 border-t-2 border-t-orange bg-white pb-3 pt-8 text-center text-black">
        <span className="text-2xl">{name}</span>
        <p className="text-lg">{position}</p>
      </div>
    </div>
  );
};

export default TeamCard;
