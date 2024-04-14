import Image from 'next/image';
import React from 'react'
import PreferencesQuestions from './PreferencesQuestions';

const PreferenceChoices= () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-6">
        <Image
          src="/assets/svgs/Preference.svg"
          alt="..."
          height={90}
          width={90}
          className="laptop:h-[90px] laptop:w-[90px] h-12 w-12"
        />
        <div className='flex flex-col gap-4'>
          <h3 className="laptop:text-4xl text-xl font-medium text-[#38A001]">
            Preferences and Choices
          </h3>
          <p className="text-2xl font-medium text-[#00000099] laptop:block hidden">
            Fill in your preferences
          </p>
        </div>
      </div>
      {/* <StudentDetails /> */}
      <PreferencesQuestions/>
    </div>
  )
}

export default PreferenceChoices;
