import { Clock, Heart, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useState } from "react";

function DoctorCard({ doctor }) {
  const { id, name, specialty, hospital, rating, totalRatings, workingHours } =
    doctor;
  const [isLike, setIsLike] = useState(false);
  return (
    <>
      <Card className="doctor-card">
        {/* Image */}
        <div className="basis-1/4 h-full">
          <img src="/public/doctor.jpg" alt="doctor" className="doctor-image" />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 gap-2 pl-3 justify-between h-full ">
          <CardHeader className="p-0 pt-1 h-[40%]">
            <CardTitle className="doctor-title">{name}</CardTitle>
          </CardHeader>
          <CardContent className="doctor-content">
            <p className="doctor-description">
              {specialty} | {hospital}
            </p>
          </CardContent>
          <CardFooter className="flex gap-4 p-0 pb-3">
              <div className="flex-group">
                <Star size={20} fill="gold" stroke="0" />
                <p className="doctor-footer-text">{rating}</p>
              </div>
              <div className="flex-group flex-shrink-0">
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
      </Card>
    </>
  );
}
export default DoctorCard;
