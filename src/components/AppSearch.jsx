import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";

function AppSearch({ onClick }) {
  const [params, setParams] = useState("");

  return (
    <div className="relative my-4 ">
      <Input
        className="py-2 ring-primary h-12"
        value={params}
        onChange={(e) => setParams(e.target.value)}
        placeholder="Search Doctors"
      ></Input>
      <Search
        className="absolute top-3 stroke-primary right-4 cursor-pointer"
        onClick={() => onClick(params)}
      >
        Search
      </Search>
    </div>
  );
}
export default AppSearch;
