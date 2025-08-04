import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import React from 'react'

export default function ForgetPassword() {
  return (
    <section className='min-h-screen '>
      <div className="">
          <h1>Forget your Password</h1>

        <p>Please enter your email to reset the password </p>

      </div>
          <Input
                  className={cn("focus:outline-none px-2 bg-white rounded-lg py-1 border border-[#145DB8] focus:ring-2 focus:ring-[#6191cb]")}
                  type="email"
                  placeholder="Email"
                />

                   <button className="btn w-full">Reset Password</button>
    </section>
  )
}
