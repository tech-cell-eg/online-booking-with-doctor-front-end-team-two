import { useFormik } from "formik";
import AuthForm from "../AuthForm/AuthForm";
import * as yup from "yup";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
export default function SignIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate()
 let regexes = {
       email : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ,
         password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ 
       
 };
 const schema = yup.object({
     email :yup.string().required("email is required").email("Please enter a valid email address."),
       password: yup.string().required("password is required").matches(regexes.password , "Password must contain at least 8 characters, including letters and numbers.")
 })

const mutation = useMutation({
  mutationKey:"SigIn",
  mutationFn: async(values)=>{
    const options= {
        url: "https://round5-online-booking-with-doctor-api.digital-vision-solutions.com/api/login",
    method: "POST",
    data: {

 email : values.email,
 password : values.password,
 
    },
    }

    const {data} = await axios.request(options)
    console.log("sign in data" , data);
    
return data
  },
  onSuccess: (data)=>{
    toast.success("logged in successfully")
  const token = data.data.token;
      queryClient.setQueryData(["authToken"], token);
      localStorage.setItem("authToken", token)

    setTimeout(()=>{
            navigate("/Home")
    }, 3000)
   
  }
})
  const formik = useFormik({
      initialValues:{
      email: "",
     password: "",
 
  },
  validationSchema : schema , 
  onSubmit: (values)=>{
    mutation.mutate(values);
  }
})
  return (

    <>
       <main className="px-4 sm:px-6 md:px-10 min-h-screen relative flex items-center justify-center md:justify-start">
      <AuthForm
        title="Sign in to your Account"
        
        submitLabel="Sign in"
        isSignin
        formik={formik}
      />
      <div className="absolute hidden md:block right-0 top-0 bottom-0">
        <img src="/signBg.png" alt="waves image" className="h-screen object-cover" />
      </div>
      </main>
    </>
  )
}
