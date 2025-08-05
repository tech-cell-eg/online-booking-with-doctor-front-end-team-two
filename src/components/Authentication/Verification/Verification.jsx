import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import React from 'react'

export default function Verification() {
  return (
    <>
   <section className="min-h-screen flex justify-center items-center bg-gray-50">
  <div className="w-full max-w-md p-8 md:p-10 bg-white shadow-md rounded-xl space-y-8">
    <h1 className="text-2xl md:text-3xl font-bold text-center text-[#145DB8]">
      Code Verification
    </h1>

    <div className="text-center space-y-2">
      <p>Code has been sent to your email</p>
      <p>Check your Email</p>
    </div>

    <Input
      id="text"
      className={cn("w-full focus:outline-none px-4 py-2 bg-white rounded-lg border border-[#145DB8] focus:ring-2 focus:ring-[#6191cb]")}
      type="email"
      placeholder="Email"
    />

    <p className="text-center text-sm text-gray-500">Resend code in 55s</p>

 
      <Button className="w-full py-2 rounded-lg  bg-[#145DB8] hover:bg-[#0f4c9e] ">
          Verify
        </Button>
  </div>
</section>

    
    </>
  )
}
