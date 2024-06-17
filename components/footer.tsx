import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="mx-auto w-11/12" id="contact">
      <div className="flex justify-between">
        <h1 className="max-w-[530px] text-[75px] leading-[110%]">
          We are Experts Providing
        </h1>
        <div className="relative h-[186px] w-[250px]">
          <Image src="/images/shared/laptop.svg" alt="modality laptop" fill />
        </div>
      </div>
      <div className="mt-[115px] flex items-center justify-between">
        <div className="flex flex-col gap-y-8">
          <span className="max-w-[137px] text-lg">
            Subscribe to our newsletter
          </span>
          <form className="flex items-center gap-x-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-[340px] border-b border-b-black bg-transparent pb-2 pl-1 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-40 hover:bg-orange-20 flex items-center gap-x-1.5 rounded-3xl py-1 pl-4 pr-1 text-white transition"
            >
              <span>Subscribe</span>
              <Image
                src="/images/shared/arrow-right.svg"
                alt="arrow right"
                width={34}
                height={34}
              />
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-y-6 text-[15px]">
          <span className="font-extrabold text-grey-40">Contact</span>
          <div className="flex flex-col gap-y-2">
            <p>(647)229 5559</p>
            <p>ian@modalityit.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 text-[15px]">
          <span className="font-extrabold text-grey-40">Quick Links</span>
          <div className="flex flex-col gap-y-2">
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-x-1 font-semibold"
            >
              <span>Whatsapp</span> <ArrowRightIcon />
            </a>
          </div>
        </div>
      </div>
      <div>
        <Separator className="mt-[115px]" />
        <div className="flex items-center justify-between py-7 text-xs">
          <p className="font-semibold">© 2024 Modality IT Tech.</p>
          <p>
            All Right Reserved by{" "}
            <a
              href="https://www.sanemuix.com/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold"
            >
              sanemuix.com
            </a>{" "}
            powered by
            <a
              href="https://chris-drab.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="pl-0.5 font-semibold"
            >
              chris.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
