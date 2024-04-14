"use client";
import { setSaveNext } from "@/app/redux/slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const StudentDetails = () => {
  // This is a dispatch function to close the modal
  const dispatch = useDispatch();
  const saveNextButtonDispatch = () => {
    dispatch(setSaveNext(true));
  };

  const [studentFormData, setStudentFormData] = useState({
    studentName: "",
    studentDOB: "",
    studentEmail: "",
    studentPhoneNumber: "",
    studentCity: "",
    student10thMarks: "",
    student12thMarks: "",
    student10thBoard: "",
    student12thBoard: "",
  });

  const {
    studentName,
    studentDOB,
    studentEmail,
    studentPhoneNumber,
    studentCity,
    student10thMarks,
    student12thMarks,
    student10thBoard,
    student12thBoard,
  } = studentFormData;

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setStudentFormData({ ...studentFormData, [e.target.id]: e.target.value });
  };

  const reset = () => {
    setStudentFormData({
      studentName: "",
      studentDOB: "",
      studentEmail: "",
      studentPhoneNumber: "",
      studentCity: "",
      student10thMarks: "",
      student12thMarks: "",
      student10thBoard: "",
      student12thBoard: "",
    });
  };

  return (
    <div>
      {/* Student Current Details */}
      <div className="my-10 grid tablet:grid-cols-2 grid-cols-1 gap-7">
        <Input
          placeholder="STUDENT NAME"
          width="w-full"
          handleChange={handleChange}
          id="studentName"
          value={studentName}
        />
        <Input
          placeholder="STUDENT DATE OF BIRTH"
          width="w-1/2 tablet:w-full"
          handleChange={handleChange}
          id="studentDOB"
          value={studentDOB}
        />
        <Input
          placeholder="STUDENT EMAIL-ID"
          width="w-full"
          handleChange={handleChange}
          id="studentEmail"
          value={studentEmail}
        />
        <Input
          placeholder="STUDENT PHONE NUMBER"
          width="w-full"
          handleChange={handleChange}
          id="studentPhoneNumber"
          value={studentPhoneNumber}
        />
        <Input
          placeholder="SELECT STUDENT CITY"
          width="w-1/2 tablet:w-full"
          handleChange={handleChange}
          id="studentCity"
          value={studentCity}
        />
      </div>

      {/* Past Education Detail */}
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-medium text-[#00000099]">
          Past Education Details
        </h3>
        {/* 10th class detail */}
        <PastDetail
          standard="10th Standard Details"
          placeholder="10th MARKS"
          handleChange={handleChange}
          selectBoardId="student10thBoard"
          selectValue={student10thBoard}
          inputId="student10thMarks"
          inputValue={student10thMarks}
        />

        {/* 12th class detail */}
        <PastDetail
          standard="12th Standard Details"
          placeholder="12th MARKS"
          handleChange={handleChange}
          selectBoardId="student12thBoard"
          selectValue={student12thBoard}
          inputId="student12thMarks"
          inputValue={student12thMarks}
        />

        {/* Reset and Save & Next button */}
        <div className="flex items-center gap-4 w-full">
          <button
            onClick={reset}
            className="flex items-center justify-center px-3 py-4 border border-gray-600 rounded-full w-1/2 bg-[#E7F9D1] text-[#000000] font-medium text-sm tablet:text-base"
          >
            Reset
          </button>
          <button
            onClick={saveNextButtonDispatch}
            className="flex items-center justify-center px-3 py-4 border border-gray-600 rounded-full w-1/2 bg-[#38A001] text-white font-medium text-sm tablet:text-base"
          >
            Save & Next
          </button>
        </div>

        <div className="flex items-center justify-center">
          <p className="text-xs tablet:w-3/5 text-center">
            By submitting this form, I agree to receive notifications from the
            University in the form of SMS/Email/Call.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;

const Input = ({
  placeholder,
  width,
  handleChange,
  value,
  id,
}: {
  placeholder: string;
  width: string;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  value: string;
  id: string;
}) => (
  <div
    className={`border border-gray-500 rounded-[32px] laptop:px-9 laptop:py-4 p-2 ${width}`}
  >
    <input
      type="text"
      onChange={handleChange}
      value={value}
      id={id}
      className="border-none outline-none bg-transparent w-full h-full placeholder:text-xs placeholder:text-gray-600"
      placeholder={placeholder}
    />
  </div>
);

const PastDetail = ({
  standard,
  placeholder,
  handleChange,
  selectBoardId,
  selectValue,
  inputId,
  inputValue,
}: {
  standard: string;
  placeholder: string;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  selectBoardId: string;
  selectValue: string;
  inputId: string;
  inputValue: string;
}) => (
  <div className="flex flex-col gap-3 w-full">
    <label className="text-2xl font-medium text-[#00000099]">{standard}</label>
    <div className="flex flex-row gap-5 w-full">
      <div className="border border-gray-500 rounded-[32px] laptop:px-9 laptop:py-4 p-2 w-1/2">
        <select
          id={selectBoardId}
          onChange={handleChange}
          value={selectValue}
          className="border-none outline-none bg-transparent w-full h-full placeholder:text-xs placeholder:text-gray-600 text-xs"
          required
        >
          <option>School Board</option>
          <option>CBSE</option>
          <option>ICSE</option>
          <option>State Board</option>
        </select>
      </div>
      <Input
        placeholder={placeholder}
        width="w-1/2"
        handleChange={handleChange}
        id={inputId}
        value={inputValue}
      />
    </div>
  </div>
);
