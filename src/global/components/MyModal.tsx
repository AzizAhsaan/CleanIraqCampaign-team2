import usePostForm from "@/app/campaigns/components/usePostForm";
import MainButton from "./MainButton";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import FormInput from "./FormInput";
import PhoneNumberInput from "./PhoneNumberInput";
import DropdownFeild from "./DropdownFeild";
import TextareaInput from "./TextareaInput";
import FormButton from "./FormButton";

function MyModal({ closeModal}:{closeModal:Function}) {

    function handleClick() {
        console.log('doing something very cool');
        closeModal();
    }

    function closeModalBgClick(e:any) {
        if (e.target.id === 'modal-bg') {
            console.log(e.target);
            closeModal();
        }
    }

    return ( 
    <div id="modal-bg" className="fixed top-0 left-0 z-50 w-screen h-screen bg-zinc-700/50 flex flex-col justify-center items-center" onClick={closeModalBgClick}>
        <div className="bg-light  rounded-lg px-4   py-14 m-4 flex flex-col relative shadow-2xl  text-gray2 text-center items-center">
            <p onClick={handleClick} className="absolute text-2xl  top-2 right-5 hover:cursor-pointer">x</p>
            <h1 className="text-xl md:text-2xl font-bold text-gray3  pb-8">يمكنك ان تساهم في دعم حملة سفراء النظافة</h1>
            <div className="bg-gray4 w-6/12 h-1 mx-auto mb-8"></div>
            <h2 className="text-xl text- pb-4">املا معلوماتك وما تودالتبرع به</h2>
           <DonationForm/>
        </div>

    </div>);
}

export default MyModal;

const donation_material=["ماء ","طعام" ,"ادوات تنضيف","اخرى"]


 interface Idonate {
  name: string;
  personalNumber: string;
  telegram: string;
  msg: string;
  material :string ;
}

function DonationForm() {
    const { loading, error, success, submitForm } = usePostForm();
    const handleSubmit = async (values: Idonate) => {
    const formData: Idonate = {
     name:values.name,
    personalNumber: values.personalNumber,
    telegram: values.telegram,
    msg: values.msg,
    material:values.material
    };
    await submitForm({formdata:formData,path:'https://sheetdb.io/api/v1/jotqfu8redoz8'});
  };

  const initialValues = {
    name: '',
    personalNumber: '',
    telegram: '',
    msg: '',
    material:"",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("الاسم مطلوب"),
    telegram: Yup.string().required("معرف التلكرام مطلوب"),
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
        <Form className="flex flex-col  w-full gap-4 p-6 text-end rounded-2xl ">
          <FormInput text="الاسم" type="text" name="name" placeholder=""/>
          <div className="flex flex-col md:flex-row gap-10 items-center w-full">
            <PhoneNumberInput text="رقم الهاتف" name="personalNumber"/>
            <FormInput text=" معرف التلكرام" type="text" name="telegram" placeholder=""/>
          </div>
          <DropdownFeild optionsList={donation_material} text="نوع التبرع" name="material"/>
          <TextareaInput text="رسالتك" name="msg" rows={3} placeholder=""/>
         <div className="self-center"><FormButton isLoading={loading}/></div>
        </Form>
      </Formik>
    </div>
  );
}


