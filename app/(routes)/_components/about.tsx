import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  return (
    <section
      className="mx-auto mt-16 flex scroll-mt-48 items-center justify-between md:mt-[135px] lg:w-[87%]"
      id="about"
    >
      <div className="relative hidden h-[414px] overflow-hidden lg:block lg:w-5/12">
        <Image
          src="/images/shared/about.png"
          alt="about image"
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative h-[200px] w-[49%] overflow-hidden lg:hidden">
        <Image
          src="/images/shared/about-2.png"
          alt="about image"
          fill
          className="rounded-r-lg object-cover"
        />
      </div>
      <div className="flex w-[49%] flex-col gap-y-2 pr-2 md:gap-y-10 lg:w-1/2">
        <h2 className="text-base md:text-3xl">
          Experts in DICOM, RIS, & PACS Management
        </h2>
        <p className="text-xs font-extralight leading-[14px] text-grey-40 md:text-lg md:font-normal md:leading-none lg:leading-[160%]">
          We're a dedicated team of experts, formerly employed by Canada's top
          DICOM, RIS, & PACS providers. With an in-depth understanding of
          diagnostic clinics, we're adept at resolving the specific IT issues
          you encounter daily.
        </p>
        <div className="flex items-center justify-between">
          <Link
            href="#footer"
            className="flex items-center gap-x-2 text-xs font-extrabold text-orange-20 transition hover:opacity-90 md:text-lg"
          >
            <span>Contact us</span> <FaArrowRightLong size={12} />
          </Link>
          <div className="relative h-[12px] w-[40px] md:h-[21px] md:w-[62px]">
            <Image
              src="/images/shared/velox.png"
              alt="velox"
              width={62}
              height={21}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
<section id="about"></section>;
