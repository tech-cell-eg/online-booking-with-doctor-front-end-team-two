 import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { BsFacebook, BsGoogle, BsHeartPulse } from "react-icons/bs";
import { Apple } from "lucide-react";
import { Link } from "react-router";

export default function AuthForm({ title, subtitle, submitLabel, isSignUp ,  isSignin , formik }) {
  return (
    <section className="space-y-3  w-full sm:w-[90%] md:w-[60%] lg:w-[45%]">
      <div className="flex justify-center">
        <BsHeartPulse size="60" color="#145DB8" />
      </div>

      <div className="space-y-1 text-center">
        <h1 className="text-2xl md:text-4xl font-semibold">{title}</h1>
        {subtitle && <p className="text-gray-500">{subtitle}</p>}
      </div>

      <form className="space-y-3" onSubmit={formik.handleSubmit}>
        {isSignUp && (
          <>
            <Input
            className={cn("focus:outline-none px-2 bg-white rounded-lg py-1 border border-[#145DB8] focus:ring-2 focus:ring-[#6191cb]")}
            type="text"
            placeholder="Full Name"
            value={formik.values.name} onChange={formik.handleChange}  onBlur={formik.handleBlur}
            name="name"
          />
 {formik.touched.name && formik.errors.name && (
  <p className="text-red-500 text-sm">{formik.errors.name}</p>)}
          </>
        

        )}
        <>
         <Input
          className={cn("focus:outline-none px-2 bg-white rounded-lg py-1 border border-[#145DB8] focus:ring-2 focus:ring-[#6191cb]")}
          type="email"
          placeholder="Email"
           value={formik.values.email} onChange={formik.handleChange}  onBlur={formik.handleBlur}
            name="email"
        />
        
        {formik.touched.email && formik.errors.email  && (
  <p className="text-red-500 text-sm">{formik.errors.email}</p>)}

        </>
       <>
        <Input
          className={cn("focus:outline-none px-2 bg-white rounded-lg py-1 border border-[#145DB8] focus:ring-2 focus:ring-[#6191cb]")}
          type="password"
          placeholder="Password"
           value={formik.values.password} onChange={formik.handleChange}  onBlur={formik.handleBlur}
            name="password"
        />
         {formik.touched.password && formik.errors.password  && (
  <p className="text-red-500 text-sm">{formik.errors.password}</p>)}
        </>

          {isSignUp && (
            <>
              <Input
            className={cn("focus:outline-none px-2 bg-white rounded-lg py-1 border border-[#145DB8] focus:ring-2 focus:ring-[#6191cb]")}
            type="password"
            placeholder="Confirm Password"
             value={formik.values.password_confirmation} onChange={formik.handleChange}  onBlur={formik.handleBlur}
            name="password_confirmation"
          />
             {formik.touched.password_confirmation && formik.errors.password_confirmation  && (
  <p className="text-red-500 text-sm">{formik.errors.password_confirmation}</p>)}
      <Input
            className={cn("focus:outline-none px-2 bg-white rounded-lg py-1 border border-[#145DB8] focus:ring-2 focus:ring-[#6191cb]")}
            type="tel"
            placeholder="Phone"
              value={formik.values.phone} onChange={formik.handleChange}  onBlur={formik.handleBlur}
            name="phone"
          />
           {formik.touched.phone && formik.errors.phone  && (
  <p className="text-red-500 text-sm">{formik.errors.phone}</p>)}
            </>
        
        
        )}
        {
            isSignin &&<p className="mt-10"><Link to="/ForgetPassword" >Forget the password?</Link> </p>
        }

          <button type="submit" className="btn w-full">{submitLabel}</button>
      </form>

    



      <div className="space-y-4">
        <div className="mt-10 relative flex items-center justify-center gap-2">
          <div className="flex-1 h-[1px] bg-gray-200"></div>
          <p className="px-2 text-sm text-gray-500 whitespace-nowrap">or</p>
          <div className="flex-1 h-[1px] bg-gray-200"></div>
        </div>

        <div className="flex gap-5 justify-center">
          <div className="py-1 px-3 flex justify-center items-center border border-gray-500 rounded-md">
            <BsFacebook className="text-2xl text-blue-600" />
          </div>
          <div className="p-3 flex justify-center items-center border border-gray-500 rounded-md">
            <BsGoogle className="text-2xl text-red-600" />
          </div>
          <div className="p-3 flex justify-center items-center border border-gray-500 rounded-md">
            <Apple className="text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
