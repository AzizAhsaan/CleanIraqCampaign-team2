import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; 
import React, { useState } from 'react'
import { ErrorMessage, Field } from "formik";

const PhoneNumberInput = ({text,name}:{text:string,name:string}) => {
  const [phoneNumber, setPhoneNumber] = useState({
    countryCode: '+1',
    phoneNumber: '',
  });

  const handlePhoneNumberChange = (newPhoneNumber:any) => {
    setPhoneNumber(newPhoneNumber);
  };

  return (
     <div className="flex flex-col w-full items-end bg-transparent mt-0 ">
             <label htmlFor={name} className=" text-sm mb-2">
             {text}
             </label>
        <div className="flex items-center justify-end border border-gray-300 px-3 py-1 rounded-md w-full ">
      <div>
        <Field
          type="text"
          className=" bg-transparent text-end"
          placeholder=""
          value={phoneNumber.phoneNumber}
          onChange={(value:any) => handlePhoneNumberChange({ ...value, phoneNumber: value.target.value })}
        />
      </div>
         <select
          className="bg-transparent border-l border-gray-300 ml-2 w-fit items-end text-end"
          value={phoneNumber.countryCode}
          onChange={(e) => handlePhoneNumberChange({ ...phoneNumber, countryCode: e.target.value })}
        >
          <option value="+964">+194</option>
          <option value="+44">+44</option>
        </select>
    </div>
      <ErrorMessage name={name} render={renderErrorMessage} />
    </div>
        
  )
}

export default PhoneNumberInput

const renderErrorMessage = (errormsg: string) => (
    <div className="flex flex-row items-center justify-center  py-4">
      <span className="mx-2 text-sm text-gray2">{errormsg}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-red-400 text-sm"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
    </div>
  );