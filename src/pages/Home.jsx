import AppPagination from "@/components/AppPagination";
import DoctorsList from "@/components/DoctorsList";
import HomeHero from "@/components/HomeHero";
import { useNearbyDoctors } from "@/hooks/useNearbyDoctors";
import AppSearch from "@/components/AppSearch";
import { useSearchDoctors } from "@/hooks/useSearchDoctors";

function Home() {
  //load nearby doctors
  const { isPending, isError, data: nearbyDoctors, error } = useNearbyDoctors();
  const { onSearch, doctors: searchedDoctors, isPending: isDoctors, error: isDoctorError } = useSearchDoctors();

  
  if (isPending) return;
  
  /*TODO: if user search fetch data from server, replace current data with new one -> Done*/ 
  const doctors = searchedDoctors.length === 0 ? nearbyDoctors : searchedDoctors 

  return (
    <div className="page-container">
      <div className="">
        <HomeHero />
        <h2 className="font-bold py-6">Doctors near you</h2>
        <AppSearch onClick={onSearch}></AppSearch>
        <DoctorsList doctors={doctors} />
        <AppPagination prev="doctors" next="doctors" />
      </div>
    </div>
  );
}
export default Home;
