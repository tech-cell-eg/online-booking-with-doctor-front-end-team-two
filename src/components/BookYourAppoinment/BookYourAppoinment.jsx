import React from 'react'
export default function BookYourAppoinment() {
  return (
    <>
    <main className='px-6 md:px-10 lg:px-20'>
        <section className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'>
            <div className="pt-8">
                <img src="/image1.png" alt="phone image" className='w-full h-auto max-w-md mx-auto md:max-w-full' />
            </div>
            <div className=" flex  justify-center flex-col  h-full space-y-4 md:space-y-6">
              <div className="space-y-2 md:space-y-3">  
                <h1 className=' text-center md:text-left text-xl font-semibold '> Book Your Appointment Easily </h1>

              <p className=' text-center font-medium text-xl md:text-left text-gray-600'>Choose your preferred doctor, pick a suitable time, and confirm your visit in just a few taps. No calls, no waiting—just simple and fast booking.</p>
           </div>
               <div className="mt-4">
               <button className='btn w-full'>Next</button>
           </div>
            
            </div>

        </section>
    </main>
    
    
    </>
  )
}
