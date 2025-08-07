import { Button } from '@/components/ui/button'
import * as yup from "yup";
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import React from 'react'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';

export default function ForgetPassword() {
  //  let regex = {
  //      email : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ };
  const validationSchema = yup.object({
    email :yup.string().required("email is required").email("Please enter a valid email address."),
          
  })
  const mutation = useMutation({
    mutationFn: async(values)=>{
       
    const options= {
        url: " https://round5-online-booking-with-doctor-api.digital-vision-solutions.com/api/send-reset-otp",
        method: "POST",
    data: {
      email : values.email,},
   headers : {
        Accept: "application/json", }
  }
     const {data} = await axios.request(options)
    console.log("forget pass data" , data);
    },

    onSuccess: (data)=>{
toast.success(data.data.message)
    },
     onError: (error)=>{
        console.log("SignUp Error:", error);


  if (error?.response?.data?.message) {
    toast.error(error.response.data.message);
  } else {
    toast.error("Please try again.");
  }
  },
   
    }


)
const formik = useFormik({
  initialValues: {
    email: "",
},
validationSchema,
onSubmit: (values)=>{
mutation.mutate(values)
}

})
  return (

    <section className='min-h-screen flex justify-center items-center bg-gray-50'>
  <form onSubmit={formik.handleSubmit} className="w-full max-w-md p-8 md:p-10 bg-white shadow-lg rounded-xl space-y-8">
    <h1 className='text-2xl md:text-3xl font-bold text-center text-[#145DB8]'>Forget your Password</h1>

    <div className="space-y-4">
      <label htmlFor="email" className='block text-sm text-gray-700'>
        Please enter your email to reset the password
      </label>
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
    </div>



     <Button type="submit" className="w-full py-2 rounded-lg  bg-[#145DB8] hover:bg-[#0f4c9e]">
      Reset Password
    </Button>
   
  </form>
</section>




  )
}
