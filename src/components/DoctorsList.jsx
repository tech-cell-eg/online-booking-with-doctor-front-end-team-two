import DoctorCard from "./DoctorCard";

function DoctorsList({ doctors }) {
  return (
    <div>
      <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">
        {doctors.map((doctor) => {
          return <DoctorCard doctor={doctor} key={doctor.id}></DoctorCard>;
        })}
      </ul>
    </div>
  );
}
export default DoctorsList;
