import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'


export default function UpdatePassword() {
  return (
    <>
    
        <section className='min-h-screen flex justify-center items-center '>
      <div className="w-full  p-8 md:p-10  space-y-8">
        <h1 className='text-2xl md:text-3xl font-bold text-center text-[#145DB8]'>Set new password</h1>
    <p className='text-center'>Create a new password, ensure it different form your revious ones for security.</p>
        <div className="space-y-4">
          <label htmlFor="email" className='block text-sm text-gray-700'>
            New password
          </label>
          <Input
            id="email"
            className={cn("focus:outline-none px-4 py-2 bg-white rounded-lg border border-[#145DB8] focus:ring-2 focus:ring-[#6191cb]")}
            type="password"
            placeholder="Password"
          />

              <label htmlFor="email" className='block text-sm text-gray-700'>
            Confirm password</label>
          <Input
            id="email"
            className={cn("focus:outline-none px-4 py-2 bg-white rounded-lg border border-[#145DB8] focus:ring-2 focus:ring-[#6191cb]")}
            type="password"
            placeholder="Confirm Password"
          />

        </div>
    
      

 <Button className="w-full py-2 rounded-lg  bg-[#145DB8] hover:bg-[#0f4c9e] ">
  Update Password
</Button>

      </div>
    </section>
    
    </>
  )
}
