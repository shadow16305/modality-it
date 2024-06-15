import Image from "next/image";
import List from "./list";

const Features = () => {
  return (
    <section className="relative mt-[135px] overflow-hidden bg-black py-28">
      <div className="absolute -bottom-10 -left-20 z-10 size-80 rounded-full bg-orange blur-[200px]" />
      <div className="absolute -right-20 -top-10 z-10 size-80 rounded-full bg-orange blur-[200px]" />
      <div className="mx-auto w-[87%] text-white">
        <div className="relative z-10 flex justify-between">
          <h2 className="max-w-[800px] text-[75px] leading-[110%]">
            For a <span className="text-orange">flat-monthly fee,</span> here’s
            what you get
          </h2>
          <button className="h-[105px] rounded-lg bg-white/20 px-20 text-lg backdrop-blur-md">
            Get free consultation
          </button>
        </div>
        <List />
      </div>
      <div className="mt-12 flex w-full justify-between">
        <div className="relative z-10 h-3 w-[47%]">
          <Image src="/images/shared/line.png" alt="line" fill />
        </div>
        <div className="relative z-10 h-3 w-[47%]">
          <Image
            src="/images/shared/line.png"
            alt="line"
            fill
            className="rotate-180"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
