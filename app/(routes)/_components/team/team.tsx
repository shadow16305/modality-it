import { teamItems } from "@/constants/constants";
import Image from "next/image";
import TeamCard from "./team-card";

const Team = () => {
  return (
    <section className="mt-24 bg-black text-white md:bg-transparent md:py-[90px]">
      <div className="bg-[url(../public/images/shared/team-bg-mobile.png)] bg-contain bg-no-repeat pb-10 pt-3 md:bg-[url(../public/images/shared/team-bg.png)] md:bg-cover md:pt-20">
        <div className="relative">
          <h2 className="text-center text-base md:text-3xl">Team</h2>
          <div className="absolute -top-0.5 left-1/2 h-[33px] w-[71px] -translate-x-1/2 md:-top-6 md:h-[73px] md:w-[203px]">
            <Image
              src="/images/shared/circled-line.png"
              alt="circle line"
              width={203}
              height={73}
              className=""
            />
          </div>
        </div>
        <div className="mt-7 space-y-2 text-center md:mt-[70px]">
          <p className="text-xs md:text-[28px]">
            Our team members are ready to help our clients!
          </p>
          <p className="text-xs font-extralight md:text-xl md:font-normal">
            We love what we do and we do it with passion. We value the
            experimentation of the message and smart incentives.
          </p>
        </div>
      </div>
      <div className="bg-[url(../public/images/shared/team-rectangle.png)] bg-cover pb-16 pt-9 md:pb-24 md:pt-12">
        <div className="mx-auto flex w-[87%] justify-between">
          {teamItems.map((item) => (
            <TeamCard
              key={item.name}
              name={item.name}
              position={item.position}
              img={item.imgPath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
