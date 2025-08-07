import { useEffect } from 'react';
import { BsHeartPulse } from 'react-icons/bs';
import { useNavigate } from 'react-router';
export default function Home() {
  const navigate = useNavigate()

   useEffect(() => {
    const timer = setTimeout(
      () => {
      navigate("/SignUp");
    }, 500);
 
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>

    <section className='bg-[#145DB8] min-h-screen flex flex-col justify-around items-center'>
      <div className="" >
          <BsHeartPulse size="60" color="white" />
           </div>

  <div class="flex items-center justify-center gap-2">
    <span class="inline-block w-10 h-10 rounded-full bg-white"></span> 
    <span class="inline-block w-8 h-8 rounded-full bg-white"></span> 
    <span class="inline-block w-6 h-6 rounded-full bg-white"></span>   
    <span class="inline-block w-4 h-4 rounded-full bg-white"></span>   
    <span class="inline-block w-2 h-2 rounded-full bg-white"></span>   
</div>

    </section>




    
    </>
  )
}









