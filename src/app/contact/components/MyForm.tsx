"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import the styles
import usePostForm from "@/app/campaigns/components/usePostForm";
import FormInput from "@/global/components/FormInput";
import PhoneNumberInput from "@/global/components/PhoneNumberInput";
import TextareaInput from "@/global/components/TextareaInput";
import FormButton from "@/global/components/FormButton";

export interface IContactFormData {
  name: string;
  age: number | undefined;
  personalNumber: string;
  telegram: string;
  msg: string;
}

function MyForm() {
    const { loading, error, success, submitForm } = usePostForm();
    const handleSubmit = async (values: IContactFormData) => {
    const formData: IContactFormData = {
     name:values.name,
    age: values.age,
    personalNumber: values.personalNumber,
    telegram: values.telegram,
    msg: values.msg,
    };
    await submitForm({formdata:formData,path:'https://sheetdb.io/api/v1/6zlqet0adtd7e'});
  };
    const customInputStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    width:"100%",
    border:"none"
    // borderBottom:"1 solid gray"

  };

  const initialValues = {
    name: '',
    age: undefined,
    personalNumber: '',
    telegram: '',
    msg: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("الاسم مطلوب"),
    telegram: Yup.string().required("معرف التلكرام مطلوب"),
    age: Yup.number()
    .required('العمر مطلوب')
    .positive('يجب ان يكزن العمر اكبر من صفر')
    .integer('يجب ان يكون العمر عدد صحيح')
    .min(0, 'يجب ان يكون العمر اكبر من صفر')
    .max(150, 'يجب ان يكون العمر اقل من 150'),
     msg: Yup.string().required("يرجى كتابة الرسالة"),
    //  personalNumber:Yup.number().required("يرجى كتابة رقم الهاتف")
    
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col items-center w-full gap-10 p-16 bg-nutral rounded-2xl ">
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <div className="flex flex-col w-full items-end">
             <FormInput text="الاسم" type="text" name="name" placeholder=""/>
             
             <FormInput text="العمر" type="number" name="age" placeholder=""/>

          </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10  w-full">
           <PhoneNumberInput text="رقم الهاتف" name="personalNumber"/>
             <FormInput text=" معرف التلكرام"  type="text"  name="telegram" placeholder=""/>
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center w-full">
           <TextareaInput text="رسالتك" name="msg" rows={3} placeholder=""/>

          </div>
         <FormButton isLoading={loading}/>
             </Form>
      </Formik>
    </div>
  );
}
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

export default MyForm;
