import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useFormik } from 'formik'
import * as yup from "yup";
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

export default function UpdatePassword() {
  const navigate = useNavigate()
   let regexes = {
        email : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ,
       
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ 

        
  };

  const validationSchema = yup.object({
       email :yup.string().required("email is required").email("Please enter a valid email address."),
       password: yup.string().required("password is required").matches(regexes.password , "Password must contain at least 8 characters, including letters and numbers."
) ,   
        password_confirmation:  yup.string()
        .required("confirming password is required").oneOf([yup.ref("password")], "Passwords must match"),
   otp: yup.string().required("Reset code is required"),
      })
  const mutation = useMutation( {
    mutationFn: async(values)=>{
      const token = localStorage.getItem("authToken");
     const options= {
        url: "https://round5-online-booking-with-doctor-api.digital-vision-solutions.com/api/reset-password",
        method: "POST",
    data: {
      email : values.email,
      otp: values.otp,
       password : values.password,
 password_confirmation : values.password_confirmation,
    },
   headers : {
        Accept: "application/json",
       Authorization: `Bearer ${token}` }
  }
     const {data} = await axios.request(options)
    console.log("verify data" , data);
    return data },
        onSuccess: ()=>{
         toast.success("Code verified successfully");
   navigate("/SignIn");
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
  
  
}
  )
  const formik = useFormik({
   initialValues: {
    email: "",
    otp: "",
    password: "",
    password_confirmation: "" },
    validationSchema,
    onSubmit: (values)=>{
        mutation.mutate(values)
    }

  })
  return (
    <>  
    
        <section className='min-h-screen flex justify-center items-center '>
      <form onSubmit={formik.handleSubmit} className="w-full  p-8 md:p-10  space-y-8">
        <h1 className='text-2xl md:text-3xl font-bold text-center text-[#145DB8]'>Set new password</h1>
    <p className='text-center'>Create a new password. Make sure it is different from your previous ones for better security.</p>
        <div className="space-y-4">
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
      
      className={cn("w-full focus:outline-none px-4 py-1 bg-white rounded-lg border border-[#145DB8] focus:ring-2 focus:ring-[#6191cb]")}
      type="text"
     placeholder='Enter your resetCode'
   value={formik.values.otp} 
        onChange={formik.handleChange}  onBlur={formik.handleBlur} name='otp' />
        {
     formik.errors.otp && formik.touched.otp ? <p className="text-red-600">{formik.errors.resetCode}</p> : null
        }
        {/* <label htmlFor="email" className='block text-sm text-gray-700'>
          New password
        </label> */}
          <Input
          className={cn("focus:outline-none px-4 py-2 bg-white rounded-lg border border-[#145DB8] focus:ring-2 focus:ring-[#6191cb]")}
            type="password"
            placeholder="Password"
             name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
             {formik.touched.password && formik.errors.password  && (
  <p className="text-red-500 text-sm">{formik.errors.password}</p>)}

              {/* <label htmlFor="email" className='block text-sm text-gray-700'>
            Confirm password</label> */}
          <Input
           
            className={cn("focus:outline-none px-4 py-2 bg-white rounded-lg border border-[#145DB8] focus:ring-2 focus:ring-[#6191cb]")}
            type="password"
            placeholder="Confirm Password"
            name="password_confirmation"
            value={formik.values.password_confirmation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
           {formik.touched.password_confirmation && formik.errors.password_confirmation  && (
  <p className="text-red-500 text-sm">{formik.errors.password_confirmation}</p>)}

        </div>
    
      

 <Button type="submit" className="w-full py-2 rounded-lg  bg-[#145DB8] hover:bg-[#0f4c9e] ">
  Update Password
</Button>

      </form>
    </section>
    
    </>
  )
}
