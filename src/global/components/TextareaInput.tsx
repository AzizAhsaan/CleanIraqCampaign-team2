import { ErrorMessage, Field } from 'formik'
import React from 'react'

const TextareaInput = ({name,text,rows,placeholder}:{name:string,text:string,rows:number,placeholder:string}) => {
  return (
             <div className="flex flex-col md:flex-row gap-10 items-center w-full">
            <div className="flex flex-col w-full items-end ">
             <label htmlFor={name} className="text-sm mb-2">
              {text}
              </label>
              <Field
                name={name}
                type="textarea"
                rows={rows}
                as="textarea"
                id={name}
                className=" placeholder:text-gray3 text-gray2 font-normal px-2 py-1 text-right transition-shadow shadow-slate-200 duration-300 bg-transparent border-2 border-gray4 border-opacity-20 focus:border-secondary rounded-md focus:outline-none focus:shadow-md w-full"
              />
              <ErrorMessage name={name} render={renderErrorMessage} />
              </div>
          </div>
  )
}

export default TextareaInput

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