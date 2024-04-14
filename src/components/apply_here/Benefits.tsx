import Image from "next/image";
import React from "react";

const Benefits = () => {
  return (
    <div className="bg-[#F9F9F9] px-4 py-8 rounded-2xl laptop:w-[367px]  w-full my-4 gap-4">
      <h3 className="font-medium laptop:text-xl text-sm">
        Get <span className="text-[#38A001]">unlimited</span> benefits of being
        a Uniford Scholar Today
      </h3>

      <div className="w-full flex flex-col gap-8 my-4">
        <Feature
          src="/assets/svgs/Education.svg"
          alt="Education"
          content="Access to Educational Resources"
        />
        <Feature
          src="/assets/svgs/Certificate.svg"
          alt="Career"
          content="Certified Courses and Career Guidance"
        />
        <Feature
          src="/assets/svgs/Omnichannel.svg"
          alt="Networking"
          content="Networking and Community Support"
        />
        <Feature
          src="/assets/svgs/Scholarship.svg"
          alt="Scholarship"
          content="Scholarship Opportunities"
        />
        <Feature
          src="/assets/svgs/Lecturer.svg"
          alt="Leadership"
          content="Leadership Development"
        />
      </div>
    </div>
  );
};

export default Benefits;

const Feature = ({
  src,
  alt,
  content,
}: {
  src: string;
  alt: string;
  content: string;
}) => (
  <div className="flex items-center gap-3">
    <Image src={src} alt={alt} height={25} width={25} />
    <p className="font-normal laptop:text-xl text-sm">{content}</p>
  </div>
);
