"use client";
import React from "react";
import bgimg from "./girl.jpeg";
import Image from "next/image";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { cities } from "@/global/utils/cities";
import usePostForm from "../campaigns/components/usePostForm";
import { FaEnvelope, FaPhone, FaPhoneAlt } from 'react-icons/fa';
import FormInput from "@/global/components/FormInput";
import PhoneNumberInput from "@/global/components/PhoneNumberInput";
import DropdownFeild from "@/global/components/DropdownFeild";
import FormButton from "@/global/components/FormButton";

export interface IJoinFormData {
 name: string;
  age: number | undefined; 
  personalNumber: string;
  telegram: string;
  msg: string;
  gender: string;
  job: string;
  governorate: string;
}
const jobs=["طالب","موضف","باحث عن عمل","اخرى"]
const gender=["ذكر","انثى"]


export default function page() {
      const { loading, error, success, submitForm } = usePostForm();
    const handleSubmit = async (values: IJoinFormData) => {
    const formData: IJoinFormData = {
  name: values.name,
    age: values.age,
    personalNumber: values.personalNumber,
    telegram: values.telegram,
    msg: values.msg,
    gender: values.gender,
    job: values.job,
    governorate: values.governorate,
    };
    await submitForm({formdata:formData,path:'https://sheetdb.io/api/v1/rha48nezvoxoo'});
  };
    const customInputStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    width:"100%",
    border:"none"

  };

  const initialValues = {
   name: '',
    age: undefined, 
    personalNumber: '',
    telegram: '',
    msg: '',
    gender: '',
    job: '',
    governorate: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("الاسم مطلوب"),
    age: Yup.number()
    .required('العمر مطلوب')
    .positive('يجب ان يكزن العمر اكبر من صفر')
    .integer('يجب ان يكون العمر عدد صحيح')
    .min(0, 'يجب ان يكون العمر اكبر من صفر')
    .max(150, 'يجب ان يكون العمر اقل من 150'),
    personalNumber: Yup.string().required("الرقم الشخصي مطلوب"),
    telegram: Yup.string().required("معرف التلكرام مطلوب"),
    gender: Yup.string().required("الجنس مطلوب"),
    job: Yup.string().required("المهنة مطلوبة"),
    governorate: Yup.string().required("المحافظة مطلوبة"),
  });
  return (
      <div className="w-screen h-fit overflow-hidden my-20">
        <div className="flex flex-row justify-between items-center  rounded-2xl overflow-hidden bg-black md:bg-nutral mx-auto w-[90%] h-fit md:h-screen">
          <ImageSection/>
        <div className="w-full  mx-auto ">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className=" relative flex flex-col items-center gap-10 justify-center w-full p-10 text-white md:text-gray1">
            <div className=" md:hidden w-full h-full absolute top-0 left-0">
            <Image
              src={bgimg}
              alt=""
              className="object-cover opacity-10 aspect-auto h-full"
            />
          </div>

           <div className="flex flex-col md:flex-row gap-10 w-full">
           <FormInput text="العمر" type="number" name="age" placeholder=""/>
          <FormInput text="الاسم" type="text" name="name" placeholder=""/>
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center w-full">
            <PhoneNumberInput text="رقم الهاتف" name="personalNumber"/>
           <FormInput text="معرف التليكرام" type="text" name="telegram" placeholder=""/>
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center w-full">
             <DropdownFeild optionsList={jobs} text="الحالة الوضيفية" name="job"/>
             <DropdownFeild optionsList={gender} text="الجنس" name="gender"/>
          </div>
          <div className="flex flex-col   items-center w-full">
            <DropdownFeild optionsList={cities} text="المحافظة" name="governorate"/>
             <p className="my-6 text-xs self-end text-gray4 md:text-gray2 text-right">
                    المحافظة الي راح تشارك بتنظيفها   (مو شرط نفسها
                    محافظة السكن)
                  </p>
            </div>
           <FormButton isLoading={loading}/>
       
            </Form>
          </Formik>
        </div>
        </div>
    </div>
  );
}
const ImageSection = () => {
  return (
    <div className="hidden md:block w-full  h-full">
          <div className="relative w-full h-full ">
          <div className="flex h-full bg-black absolute top-0 left-0">
            <Image
              src={bgimg}
              alt=""
              className="object-cover opacity-40 aspect-auto"
            />
          </div>
          <div className="absolute top-0 left-0 flex flex-col items-end justify-around w-full h-full p-4 words text-overlay">
        <p className=" text-2xl font-normal text-right text-white px-4 py-2 bg-transparent border-light border-[1px] rounded rounded-tl-3xl">
                خليك ويانا
              </p>
        <div className=" absolute bottom-10 left-4 flex flex-col gap-2 items-start justify-between socials opacity-100 text-opacity-100">
                  <span className="flex items-center gap-4 text-white"><FaEnvelope /><p> email@gmail.com</p></span>
                  <span className="flex items-center gap-4 text-white"><FaPhoneAlt /><p> +964 123 456 789</p></span>
                </div>
            <div className="flex">
              <div className="w-1/5 qr"></div>
            </div>
          </div>

        </div>
    </div>
  )
}


{/* <div className="flex flex-row-reverse items-center justify-center my-6 mb-12 content">
            <div className="lg:w-1/2">
              <h1 className="text-2xl font-bold text-right">
                {" "}
                اكتب المعلومات المطلوبة
              </h1>
              <p className="text-right">
                <span className="text-right text-blue-400">ملاحظة</span> اذا ما
                تحب تشاركنا معلوماتك، ممكن تحضر بدون ما تملي الاستمارة،{" "}
                <span className="text-right text-blue-400">
                  بس ما راح تحصل على اي وحدة من مطبوعات الحملة
                </span>{" "}
                (مثلا تيشيرت، مطارة مي، ميدالية، وغيرها)
              </p>
            </div>
            <div className="w-1/2"></div>
          </div> */}