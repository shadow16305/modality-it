import { teamItems } from "@/constants/constants";
import Image from "next/image";
import TeamCard from "./team-card";

const Team = () => {
  return (
    <section className="mt-24 py-[90px] text-white">
      <div className="bg-[url(../public/images/shared/team-bg.png)] bg-cover pb-10 pt-20">
        <div className="relative">
          <h2 className="text-center text-3xl">Team</h2>
          <Image
            src="/images/shared/circled-line.png"
            alt="circle line"
            width={203}
            height={73}
            className="absolute -top-6 left-1/2 -translate-x-1/2"
          />
        </div>
        <div className="mt-[70px] space-y-2 text-center">
          <p className="text-[28px]">
            Our team member is ready to help our clients!
          </p>
          <p className="text-xl">
            We love what we do and we do it with passion. We value the
            experimentation of the message and smart incentives.
          </p>
        </div>
      </div>
      <div className="bg-[url(../public/images/shared/team-rectangle.png)] bg-cover pb-24 pt-12">
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
