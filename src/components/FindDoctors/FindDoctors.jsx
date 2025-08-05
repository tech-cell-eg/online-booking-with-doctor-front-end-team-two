import React from 'react'

export default function FindDoctors() {
  return (
    <>
      <main className='px-10 h-screen'>
        <section className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 items-center'>
            <div className="">
                <img src="/image3.png" alt="phone image" className='w-full h-auto max-w-md mx-auto md:max-w-full' />
            </div>
            <div className=" flex  justify-center flex-col space-y-4 md:space-y-6 h-full">
              <div className="space-y-2 md:space-y-3">  
                <h1 className=' text-center md:text-left text-3xl font-semibold '>Find Doctors Around You</h1>

              <p className=' text-center  text-xl md:text-left text-gray-600'>Find Doctors Around You
Quickly discover trusted doctors near your area. Whether you need
 a general checkup or a specialist, we connect you with nearby clinics for fast and convenient care.</p>
           </div>
               <div className="">
               <button className='btn w-full'>Get Started</button>
           </div>
            
            </div>

        </section>
    </main>
    </>
  )
}
