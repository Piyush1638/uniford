"use client"
import React from "react";
import Benefits from "./Benefits";
import RegisterMe from "./RegisterMe";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {setCloseModal} from "@/app/redux/slice";
import PreferenceChoices from "./PreferenceChoices";
import ScholarsCarousel from "./Carousel";
// import {setCloseModal} from ""
const Apply = () => {

  // This is a dispatch function to close the modal
  const dispatch = useDispatch();
  const closeButtonDispatch = ()=>{
    dispatch(setCloseModal(false));
  }

  const saveNext = useSelector((state: any)=>state.saveNext);


  return (
    <div className="w-full h-full flex laptop:flex-row flex-col-reverse tablet:border border-gray-500 tablet:rounded-2xl relative">
      {/* This is a close button for modal */}
      <button 
      onClick={closeButtonDispatch}
      className="absolute top-3 right-3 ">
        <Image src="/assets/svgs/Close.svg" alt="..." height={32} width={32} />
      </button>

      <div className="laptop:w-[431px] w-full laptop:px-8 px-3 laptop:py-12 py-10 bg-gradient-to-b from-[#F4FFEA] via-[#E3FFC8] to-[#CFF2BD] rounded-2xl">
        <div className="flex flex-col gap-4">
          <h3 className="font-medium laptop:text-4xl text-2xl">
            Benefits of becoming a{" "}
            <span className="text-[#38A001]">Uniford</span> Scholar
          </h3>
          <Benefits />
          <ScholarsCarousel />
        </div>
      </div>
      <div className="laptop:w-[748px] w-full laptop:p-12 px-5 py-10">
        {!saveNext ? <RegisterMe /> : <PreferenceChoices/>}
      </div>
    </div>
  );
};

export default Apply;
