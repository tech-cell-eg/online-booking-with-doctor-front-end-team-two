import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import React from 'react'

export default function ForgetPassword() {
  return (

    <section className='min-h-screen flex justify-center items-center bg-gray-50'>
  <div className="w-full max-w-md p-8 md:p-10 bg-white shadow-lg rounded-xl space-y-8">
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
      />
    </div>



     <Button className="w-full py-2 rounded-lg  bg-[#145DB8] hover:bg-[#0f4c9e]">
      Reset Password
    </Button>
   
  </div>
</section>




  )
}
