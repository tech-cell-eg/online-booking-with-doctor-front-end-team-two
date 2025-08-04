import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { BsFacebook, BsGoogle, BsHeartPulse } from "react-icons/bs";
import { Apple } from "lucide-react";

export default function AuthForm({ title, subtitle, submitLabel, isSignUp ,  isSignin }) {
  return (
    <section className="space-y-6 w-full sm:w-[90%] md:w-[60%] lg:w-[45%]">
      <div className="flex justify-center">
        <BsHeartPulse size="60" color="#145DB8" />
      </div>

      <div className="space-y-1 text-center">
        <h1 className="text-2xl md:text-4xl font-semibold">{title}</h1>
        {subtitle && <p className="text-gray-500">{subtitle}</p>}
      </div>

      <div className="space-y-3">
        {isSignUp && (
          <Input
            className={cn("focus:outline-none px-2 bg-white rounded-lg py-1 border border-[#145DB8] focus:ring-2 focus:ring-[#6191cb]")}
            type="text"
            placeholder="Full Name"
          />
        )}
        <Input
          className={cn("focus:outline-none px-2 bg-white rounded-lg py-1 border border-[#145DB8] focus:ring-2 focus:ring-[#6191cb]")}
          type="email"
          placeholder="Email"
        />
        <Input
          className={cn("focus:outline-none px-2 bg-white rounded-lg py-1 border border-[#145DB8] focus:ring-2 focus:ring-[#6191cb]")}
          type="password"
          placeholder="Password"
        />
        {
            isSignin && <p>Forget the password?</p>
        }
      </div>

      {isSignUp && (
        <div className="flex gap-2 justify-center items-center">
          <input
            type="checkbox"
            className={cn("size-4 focus:outline-none bg-white rounded-lg border-2 border-[#145DB8] focus:ring-1 focus:ring-[#6191cb]")}
          />
          <span>Remember me</span>
        </div>
      )}

      <button className="btn w-full">{submitLabel}</button>

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
