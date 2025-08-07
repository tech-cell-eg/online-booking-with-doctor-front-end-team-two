import { useMutation } from "@tanstack/react-query";
import AuthForm from "../AuthForm/AuthForm";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function SignUp() {
  const navigate = useNavigate()
  const mutation = useMutation({
    mutationFn: async (values)=>{
      const options = {
    url: "https://round5-online-booking-with-doctor-api.digital-vision-solutions.com/api/register",
    method: "POST",
    data: {
 name : values.name,
 email : values.email,
 password : values.password,
 password_confirmation : values.password_confirmation,
 phone : values.phone
    },
    headers : {
  Accept: "application/json",
    }

  }
    const {data} = await axios.request(options)
console.log("dataaaaa",data);
return data.data
    },
    onSuccess:  () => {
  toast.success("Your account has been created");
  setTimeout(()=> {navigate("/SignIn")}, 3000 )
},
onError:(error) => {
    console.log("SignUp Error:", error);


  if (error?.response?.data?.message) {
    toast.error(error.response.data.message);
  } else {
    toast.error("Sign up failed. Please try again.");
  }
  },
})
 let regexes = {
        name: /^[A-Za-z\s]{2,50}$/ ,
       email : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ,
       phone : /^(\+2)?01[0125][0-9]{8}$/ ,
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ 
      
};
const schema = yup.object({
       name: yup.string().required("name is required").matches(regexes.name , "Name must be 2-50 characters long and contain only letters and spaces"),
       email :yup.string().required("email is required").email("Please enter a valid email address."),
       phone : yup .string().required("phone number is required").matches(regexes.phone ,"Phone number must be a valid Egyptian number."),
      password: yup.string().required("password is required").matches(regexes.password , "Password must contain at least 8 characters, including letters and numbers.") ,   
      password_confirmation:  yup.string()
      .required("confirming password is required").oneOf([yup.ref("password")], "Passwords must match"),
})
 const formik = useFormik({
  initialValues:{
     name:"",
     email: "",
     phone: "",
     password: "",
     password_confirmation: ""
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
        title="Sign Up"
        subtitle="Please provide all information required to access your account"
        submitLabel="Sign Up"
         isSignUp  
         formik= {formik}
      />
      <div className="absolute hidden md:block right-0 top-0 bottom-0">
        <img src="/signBg.png" alt="waves image" className="h-screen object-cover" />
      </div>
    </main>
   
    </>
  )
}    
