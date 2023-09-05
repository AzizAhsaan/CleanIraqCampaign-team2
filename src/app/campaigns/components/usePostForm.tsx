import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const usePostForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const submitForm = async ({formdata,path}:{formdata:any,path:string}) => {
    try {
      setLoading(true);
      const response = await fetch(path, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [
            formdata
          ]
        })
      });

      const data = await response.json();
      setLoading(false);
      setSuccess(true);
      toast.success("تم الارسال بنجاج")
    } catch (error) {
        toast.error("حدث خطأ ما يرجى المحاولة لاحقا")
      setLoading(false);
      setSuccess(false);
    }
  };

  return { loading, error, success, submitForm };
};

export default usePostForm;