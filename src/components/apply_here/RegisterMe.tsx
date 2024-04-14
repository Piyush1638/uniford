import Image from "next/image";
import React from "react";
import StudentDetails from "./StudentDetails";

const RegisterMe = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-6">
        <Image
          src="/assets/svgs/GoodNotes.svg"
          alt="..."
          height={90}
          width={90}
          className="laptop:h-[90px] laptop:w-[90px] h-12 w-12"
        />
        <div>
          <h3 className="laptop:text-4xl text-xl font-medium text-[#38A001]">
            Register Now To Apply
          </h3>
          <p className="text-2xl font-medium text-[#00000099] laptop:block hidden">
            Become a Uniford Scholar to Avail Benefits
          </p>
        </div>
      </div>
      <StudentDetails />
    </div>
  );
};

export default RegisterMe;
