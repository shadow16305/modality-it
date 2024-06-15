import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  return (
    <section
      className="mx-auto mt-[135px] flex w-11/12 items-center justify-between lg:w-[87%]"
      id="about"
    >
      <div className="relative h-[414px] overflow-hidden lg:w-5/12">
        <Image
          src="/images/shared/about.png"
          alt="about image"
          fill
          className="rounded-lg object-cover"
          sizes=""
        />
      </div>
      <div className="flex w-6/12 flex-col gap-y-10">
        <h2 className="text-3xl">Experts in DICOM, RIS, & PACS Management</h2>
        <p className="text-grey-40 text-lg">
          We're a dedicated team of experts, formerly employed by Canada's top
          DICOM, RIS, & PACS providers. With an in-depth understanding of
          diagnostic clinics, we're adept at resolving the specific IT issues
          you encounter daily.
        </p>
        <div className="flex items-center justify-between">
          <Link
            href="#footer"
            className="flex items-center gap-x-2 text-lg font-extrabold text-orange transition hover:opacity-90"
          >
            <span>Contact us</span> <FaArrowRightLong size={12} />
          </Link>
          <Image
            src="/images/shared/velox.png"
            alt="velox"
            width={62}
            height={21}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
<section id="about"></section>;
