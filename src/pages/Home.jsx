import DoctorCard from "@/components/DoctorCard";
import { doctors } from "../../Data/doctors.json";

function Home() {
  const doctor = doctors[0]
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-xl font-bold">Home Page</h1>
      <div className="flex flex-col items-center gap-6">
        {doctors.map((doctor) => {
          return <DoctorCard doctor={doctor} key={doctor.id}></DoctorCard>;
        })}
      </div>
    </div>
  );
}
export default Home;
