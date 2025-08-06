import { Clock, Heart, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useState } from "react";

function DoctorCardFlex({ doctor }) {
  const { id, name, specialty, hospital, rating, totalRatings, workingHours } =
    doctor;
  const [isLike, setIsLike] = useState(false);
  return (
    <Card className="p-0 flex w-[90%] sm:w-[60%] md:w-[45%] lg:w-[30%] h-28 sm:h-24">
      {/* Image */}
      <div className="w-[25%]">
        <img src="/public/doctor.jpg" alt="doctor" className="doctor-image" />
      </div>

      {/* Card */}
      <div className="flex flex-1 items-center ml-2">

        {/* Content */}
        <div className="flex flex-col flex-1">
          <CardHeader className="">
            <CardTitle className="doctor-title">{name}</CardTitle>
          </CardHeader>
          <CardContent className="">
            <p className="doctor-description">
              {specialty} | {hospital}
            </p>
          </CardContent>
          <CardFooter className="flex-1 gap-2 xs:gap-4">
            <div className="flex-group">
              <Star size={20} fill="gold" stroke="0" />
              <p className="doctor-footer-text">{rating}</p>
            </div>
            <div className="flex-group">
              <Clock size={20} color="#7d848a" strokeWidth={1.5} />
              <p className="doctor-footer-text">
                {workingHours.start} - {workingHours.end}
              </p>
            </div>
          </CardFooter>
        </div>

        {/* Like */}
        <div className="pr-2">
          <Heart
            className="cursor-pointer hover:fill-[#ff0000] hover:stroke-none transition-all duration-300"
            size={25}
            fill={`${isLike ? "red" : "white"}`}
            onClick={() => setIsLike((prev) => !prev)}
            stroke={`${isLike ? "none" : "black"}`}
            strokeWidth={0.8}
          />
        </div>

      </div>
    </Card>
  );
}
export default DoctorCardFlex;
