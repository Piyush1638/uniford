"use client";
import { setSaveNext } from "@/app/redux/slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const PreferencesQuestions = () => {
  const [selectedButton, setSelectedButton] = useState<string>("");
  const handleClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  const dispatch = useDispatch();
   const saveNextButtonDispatch = ()=>{
     dispatch(setSaveNext(false));
   }


//    Initially the buttons (YES OR NO) is depending on single state so change it according to the state you need.

  return (
    <div className="my-4">
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-4">
          <p>
            1. Have you decided on a specific course/program you want to pursue?{" "}
            <br /> (Yes/No)
          </p>
          <div className="flex items-center gap-3">
            <button
              className={`${
                selectedButton === "yes"
                  ? "bg-[#38A001] text-white"
                  : "bg-white text-black border border-gray-500"
              } px-6 py-3 rounded-full`}
              onClick={() => handleClick("yes")}
            >
              Yes
            </button>
            <button
              className={`${
                selectedButton === "no"
                  ? "bg-[#38A001] text-white"
                  : "bg-white text-black border border-gray-500"
              } px-6 py-3 rounded-full`}
              onClick={() => handleClick("no")}
            >
              No
            </button>
          </div>
          <div className="w-full border border-gray-500 rounded-full tablet:px-3 px-2 py-4">
            <select
              name=""
              id=""
              className="w-full bg-transparent border-none outline-none text-xs tablet:text-sm"
            >
              <option value="">IF YES, SPECIFY THE COURSE/PROCRAM NAME</option>
              <option value="">Option 1</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </select>
          </div>
        </div>
        {/* Preference Mode of Study */}
        <div className="flex flex-col gap-4">
          <p>2. Preference Mode of Study</p>
          <div className="grid tablet:grid-cols-3 grid-cols-2 gap-4">
            <button
              className={`${
                selectedButton === "yes"
                  ? "bg-[#38A001] text-white"
                  : "bg-white text-black border border-gray-500"
              } px-3 py-2  rounded-full tablet:text-sm text-xs `}
              onClick={() => handleClick("yes")}
            >
              Distance Learning
            </button>
            <button
              className={`${
                selectedButton === "no"
                  ? "bg-[#38A001] text-white"
                  : "bg-white text-black border border-gray-500"
              } px-3 py-2 rounded-full tablet:text-sm text-xs`}
              onClick={() => handleClick("no")}
            >
              On-Campus(In-Person)
            </button>
            <button
              className={`${
                selectedButton === "no"
                  ? "bg-[#38A001] text-white"
                  : "bg-white text-black border border-gray-500"
              } px-3 py-2  rounded-full w-fit tablet:text-sm text-xs`}
              onClick={() => handleClick("no")}
            >
              Hybrid
            </button>
          </div>
        </div>
        {/* Shortlisted in any college or institution */}
        <div className="flex flex-col gap-4">
          <p>
            3. Have you shortlisted any specific
            colleges/universities/institutions?
          </p>
          <div className="flex items-center gap-3">
            <button
              className={`${
                selectedButton === "yes"
                  ? "bg-[#38A001] text-white"
                  : "bg-white text-black border border-gray-500"
              } px-6 py-3 rounded-full`}
              onClick={() => handleClick("yes")}
            >
              Yes
            </button>
            <button
              className={`${
                selectedButton === "no"
                  ? "bg-[#38A001] text-white"
                  : "bg-white text-black border border-gray-500"
              } px-6 py-3 rounded-full`}
              onClick={() => handleClick("no")}
            >
              No
            </button>
          </div>
          <div className="w-full border border-gray-500 rounded-full tablet:px-3 px-2 py-4">
            <select
              name=""
              id=""
              className="w-full bg-transparent border-none outline-none text-xs tablet:text-sm"
            >
              <option value="">IF YES, PLEASE LIST THEM</option>
              <option value="">Option 1</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </select>
          </div>
        </div>
        {/* Instresting in persuing your studies abroad */}
        <div className="flex flex-col gap-4">
          <p>4. Are you interested in pursuing your studies abroad?</p>
          <div className="flex items-center gap-3">
            <button
              className={`${
                selectedButton === "yes"
                  ? "bg-[#38A001] text-white"
                  : "bg-white text-black border border-gray-500"
              } px-6 py-3 rounded-full`}
              onClick={() => handleClick("yes")}
            >
              Yes
            </button>
            <button
              className={`${
                selectedButton === "no"
                  ? "bg-[#38A001] text-white"
                  : "bg-white text-black border border-gray-500"
              } px-6 py-3 rounded-full`}
              onClick={() => handleClick("no")}
            >
              No
            </button>
          </div>
          <div className="w-full border border-gray-500 rounded-full tablet:px-3 px-2 py-4">
            <select
              name=""
              id=""
              className="w-full bg-transparent border-none outline-none text-xs tablet:text-sm"
            >
              <option value="">
                IF YES, SELECT THE COUNTRIES YOU CONSIDER
              </option>
              <option value="">Option 1</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </select>
          </div>
        </div>
        {/* Estimate budget for tution fee */}
        <div className="flex flex-col gap-4">
          <p>
            5. What is your estimated budget for tuition fees and living
            expenses?
          </p>
          <div className="flex items-center gap-4">
            <div className="w-full border border-gray-500 rounded-full tablet:px-3 px-2 py-4">
              <select
                name=""
                id=""
                className="w-full bg-transparent border-none outline-none text-xs tablet:text-sm"
              >
                <option value="">CURRENCY (INR)</option>
                <option value="">CURRENCYU (USD)</option>
                <option value="">CURRENCY (Euro)</option>
                <option value="">CURRENCY (GBP)</option>
              </select>
            </div>
            <div className="w-full border border-gray-500 rounded-full tablet:px-3 px-2 py-4">
              <select
                name=""
                id=""
                className="w-full bg-transparent border-none outline-none text-xs tablet:text-sm"
              >
                <option value="">SELECT YOUR BUDGED RANGE </option>
                <option value="">2000-5000 INR/Month</option>
                <option value="">6000-12000 INR/Month</option>
                <option value="">MORE THAN 20000 INR/Month</option>
              </select>
            </div>
          </div>
        </div>
        {/* Require financial assistance */}
        <div className="flex flex-col gap-4">
          <p>6. Do you require financial assistance or scholarships?</p>
          <div className="flex items-center gap-3">
            <button
              className={`${
                selectedButton === "yes"
                  ? "bg-[#38A001] text-white"
                  : "bg-white text-black border border-gray-500"
              } px-6 py-3 rounded-full`}
              onClick={() => handleClick("yes")}
            >
              Yes
            </button>
            <button
              className={`${
                selectedButton === "no"
                  ? "bg-[#38A001] text-white"
                  : "bg-white text-black border border-gray-500"
              } px-6 py-3 rounded-full`}
              onClick={() => handleClick("no")}
            >
              No
            </button>
          </div>
        </div>
        {/* have you ever applied to any institution */}
        <div className="flex flex-col gap-4">
          <p>7. Have you already applied to any institutions? </p>
          <div className="flex items-center gap-3">
            <button
              className={`${
                selectedButton === "yes"
                  ? "bg-[#38A001] text-white"
                  : "bg-white text-black border border-gray-500"
              } px-6 py-3 rounded-full`}
              onClick={() => handleClick("yes")}
            >
              Yes
            </button>
            <button
              className={`${
                selectedButton === "no"
                  ? "bg-[#38A001] text-white"
                  : "bg-white text-black border border-gray-500"
              } px-6 py-3 rounded-full`}
              onClick={() => handleClick("no")}
            >
              No
            </button>
          </div>
          <p>If yes, please provide details</p>
          <div className="grid tablet:grid-cols-3 grid-cols-2 gap-4">
            <div className="border border-gray-500 rounded-[32px] laptop:px-9 laptop:py-4 p-2 w-full">
              <input
                type="text"
                className="border-none outline-none bg-transparent w-full h-full placeholder:text-xs placeholder:text-gray-600"
                placeholder="INSTITUTION NAME"
              />
            </div>

            <div className="w-full border border-gray-500 rounded-full tablet:px-3 px-2 py-4">
              <select
                name=""
                id=""
                className="w-full bg-transparent border-none outline-none text-xs tablet:text-sm"
              >
                <option value="">OPTED PROGRAM</option>
                <option value="">BACHELORS</option>
                <option value="">MASTERS</option>
                <option value="">PHD</option>
              </select>
            </div>


            <div className="w-full border border-gray-500 rounded-full tablet:px-3 px-2 py-4">
              <select
                name=""
                id=""
                className="w-full bg-transparent border-none outline-none text-xs tablet:text-sm"
              >
                <option value="">APPLICATION STATUS</option>
                <option value="">STATUS 1</option>
                <option value="">STATUS 2</option>
                <option value="">STATUS 3</option>
              </select>
            </div>
          </div>

          <button className="border bg-[#E7F9D1] border-gray-500 rounded-[32px] laptop:px-9 laptop:py-4 p-2 w-fit">
           + ADD MORE
          </button>
        </div>

        <div className="flex items-center gap-4 w-full">
          <button onClick={saveNextButtonDispatch} className="flex items-center justify-center px-3 py-4 border border-gray-600 rounded-full w-1/2 bg-[#E7F9D1] text-[#000000] font-medium text-sm tablet:text-base">
            Back
          </button>
          <button className="flex items-center justify-center px-3 py-4 border border-gray-600 rounded-full w-1/2 bg-[#38A001] text-white font-medium text-sm tablet:text-base">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreferencesQuestions;
