import React from 'react'

const FormButton = ({isLoading}:{isLoading:boolean}) => {
  return (
             <button
              type="submit"
              disabled={isLoading}
              className="bg-secondary text-light font-bold px-4 md:px-8 rounded-md h-fit my-auto py-1 text-md md:text-lg w-fit ">
              {isLoading?"...جاري الارسال":"ارسل"}
            </button>
  )
}

export default FormButton