import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="mx-auto mt-16 w-11/12 md:mt-0" id="contact">
      <div className="hidden justify-between md:flex">
        <h1 className="max-w-[530px] text-lg leading-[110%] md:text-[75px]">
          We are Experts Providing
        </h1>
        <div className="relative h-[80px] w-[200px] md:h-[186px] md:w-[250px]">
          <Image src="/images/shared/laptop.svg" alt="modality laptop" fill />
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center md:mt-[115px] md:flex-row md:justify-between">
        <div className="flex w-full flex-col gap-y-4 md:gap-y-8">
          <span className="text-lg md:max-w-[137px]">
            Subscribe to our newsletter
          </span>
          <form className="flex w-full items-center gap-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-7/12 border-b border-b-black bg-transparent pb-2 focus:outline-none md:w-[340px] md:pl-1"
            />
            <button
              type="submit"
              className="flex items-center gap-x-1.5 rounded-3xl bg-orange-40 py-1 pl-4 pr-1 text-sm text-white transition hover:bg-orange-20 md:text-base"
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
        <div className="mt-16 flex w-full justify-between md:w-auto md:justify-normal md:gap-x-28">
          <div className="flex flex-col gap-y-2 text-xs md:gap-y-6 md:text-[15px]">
            <span className="font-extrabold text-grey-40">Contact</span>
            <div className="flex flex-col gap-y-2">
              <p>(647)229 5559</p>
              <p>ian@modalityit.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 text-xs md:gap-y-6 md:text-[15px]">
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
      </div>
      <div>
        <Separator className="mt-16 md:mt-[115px]" />
        <div className="flex flex-col items-center justify-between py-2 text-xs md:flex-row md:py-7">
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
