import { doctors } from "../../Data/doctors.json";
import DoctorsList from "@/components/DoctorsList";

function Home() {
  return (
    <div className="grid-cols-4 px-6">
      <div className="w-full h-[40vh] bg-primary">Image/HeroSection</div>
      <div className="py-10">
        <h2 className="p-2">Doctors near you</h2>
        <DoctorsList doctors={doctors}/>
      </div>
    </div>
  );
}
export default Home;
