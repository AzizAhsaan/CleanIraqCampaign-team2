import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import  {cities}  from "@/global/utils/cities";
import usePostForm from './usePostForm';

export interface ISuggestCampaignFormData {
  city: string;
  message: string;
  name:string;
  phone:string;
}

const FormSchema = Yup.object().shape({
  city: Yup.string().required('يرجى اختيار مدينة'),
  name: Yup.string().required('يرجى كتابة الاسم').min(6,"يجب ان لا يقل الاسم عن ٦ حروف"),
  message: Yup.string().required('يرجى كتابة التفاصيل'),
});

export const SuggustCampaignForm: React.FC = () => {
  const { loading, error, success, submitForm } = usePostForm();
    const handleSubmit = async (values: ISuggestCampaignFormData) => {
    const formData: ISuggestCampaignFormData = {
      name: values.name,
      phone: values.phone,
      city: values.city,
      message: values.message,
    };
    await submitForm({formdata:formData,path:'https://sheetdb.io/api/v1/csekcxhdtvxap'});


  };

  return (
    <Formik
      initialValues={{ city: '', message: '',name:'',phone:'' }}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
        <div className="flex flex-col  gap-5 items-center md:items-end w-full px-10 md:px-0 lg:px-32 ">
              <Field
              name="name"
              className="w-full px-4 py-2 rounded-lg bg-transparent text-end placeholder:text-light border border-white focus:outline-none focus:border-secondary"
              placeholder="الاسم الكامل"
            />
            <ErrorMessage name="name" component="div" className="text-red-400" />
            <Field
              as="select"
              name="city"
              className="w-full py-2 rounded-lg bg-transparent text-end border border-white focus:outline-none focus:border-secondary"
            >
              <option value="" label="المدينة" />
              {cities.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Field>
            <ErrorMessage name="city" component="div" className="text-red-400" />

            <Field
              as="textarea"
              name="message"
              className="w-full px-4 py-2 rounded-lg bg-transparent text-end placeholder:text-light border border-white focus:outline-none focus:border-secondary"              rows={3}
              placeholder="التفاصيل"
            />
            <ErrorMessage name="message" component="div" className="text-red-400" />

            <button
              type="submit"
              disabled={loading}
              className="bg-secondary text-light font-bold px-2 md:px-4 rounded-md h-fit my-auto py-1 text-md md:text-lg w-fit ">
              {loading?"...جاري الارسال":"ارسل"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

