import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useFormik } from 'formik'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import * as yup from "yup"
export default function Verification() {
  const navigate = useNavigate()
 const validationSchema = yup.object({
            resetCode: yup.string().required("resetCode is required") ,
             email :yup.string().required("email is required").email("Please enter a valid email address."),
            
            
        })
  const mutation = useMutation({
   
    mutationFn: async(values)=>{
             const options= {
        url: "https://round5-online-booking-with-doctor-api.digital-vision-solutions.com/api/verify-otp",
        method: "POST",
    data: {
      email : values.email,
      otp: values.resetCode
    },
   headers : {
        Accept: "application/json", }
  }
     const {data} = await axios.request(options)
    console.log("verify data" , data);
    return data
    },
    onSuccess: ()=>{
         toast.success("Code verified successfully");
   navigate("/UpdatePassword");
    },
    onError: (error) => {
  console.log("verification Error:", error);

  if (error?.response?.data?.message) {
    toast.error(error.response.data.message);
  } else if (error?.response?.status === 422) {
    toast.error("Invalid input. Please check your email and code.");
  } else {
    toast.error("Something went wrong. Please try again.");
  }
}

  })

  const formik = useFormik({
    initialValues:{
      resetCode : "",
      email: ""
    },
    onSubmit:(values)=>{
      mutation.mutate(values)
    },
    validationSchema,

  })
  return (
    <>
   <section className="min-h-screen flex justify-center items-center bg-gray-50">
  <form onSubmit={formik.handleSubmit} className="w-full max-w-md p-8 md:p-10 bg-white shadow-md rounded-xl space-y-4">
    <h1 className="text-2xl md:text-3xl font-bold text-center text-[#145DB8]">
      Code Verification
    </h1>

  <div className="text-center space-y-2">
    <p>Code has been sent to your email</p>
    <p>Check your Email</p>
  </div>

  <>
   <Input
          id="email"
          className={cn("focus:outline-none px-4 py-2 bg-white rounded-lg border border-[#145DB8] focus:ring-2 focus:ring-[#6191cb]")}
          type="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}  onBlur={formik.handleBlur}
              name="email"
        />
         {formik.touched.email && formik.errors.email  && (
    <p className="text-red-500 text-sm">{formik.errors.email}</p>)} 

    <Input
      id="text"
      className={cn("w-full focus:outline-none px-4 py-1 bg-white rounded-lg border border-[#145DB8] focus:ring-2 focus:ring-[#6191cb]")}
      type="text"
     placeholder='Enter your resetCode'
   value={formik.values.resetCode} 
        onChange={formik.handleChange}  onBlur={formik.handleBlur} name='resetCode' />
        {
     formik.errors.resetCode && formik.touched.resetCode ? <p className="text-red-600">{formik.errors.resetCode}</p> : null
        }
         
  </>

   

 
      <Button type="submit" 
        disabled={mutation.isPending}
      className="w-full py-2 rounded-lg  bg-[#145DB8] hover:bg-[#0f4c9e] ">
        {mutation.isPending ? "Verifying..."  :'Verify'}
        </Button>
  </form>
</section>

    
    </>
  )
}
