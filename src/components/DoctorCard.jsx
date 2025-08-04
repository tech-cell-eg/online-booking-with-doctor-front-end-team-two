import { Clock, Heart, Star } from "lucide-react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { useState } from "react";

function DoctorCard({ doctor }) {
  const { id, name, specialty, hospital, rating, totalRatings, workingHours } = doctor;
  const [isLike, setIsLike] = useState(false);
  return (
    <>
      <Card className="w-full max-w-[450px] max-h-[100px] flex border-[#BBC1C7]">
        <div className="basis-1/4">
          <img
            src="/public/doctor.jpg"
            alt="doctor"
            className="w-full h-full object-cover object-top rounded-l-xl"
          />
        </div>
        <div className="flex flex-1 items-center justify-between py-1">
          <CardContent className="flex h-full flex-col justify-around p-0 pl-4 items-start">
            <CardTitle className="text-lg font-news">{name}</CardTitle>
            <p className="text-gray-600">{specialty} | {hospital}</p>
            <div className="flex gap-6 pt-2">
              <div className="flex items-center gap-2">
                <Star size={20} fill="gold" stroke="0" />
                <span className="font-semibold">{rating}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <p className="font-semibold text-indigo-950">{workingHours.start} - {workingHours.end}</p>
              </div>
            </div>
          </CardContent>
          <div className="pr-4">
            <Heart
              className="cursor-pointer hover:fill-[#ff0000] hover:stroke-none transition-all duration-300"
              size={25}
              fill={`${isLike ? "red" : "white"}`}
              onClick={() => setIsLike((prev) => !prev)}
              stroke={`${isLike ? "none" : "black"}`}
            />
          </div>
        </div>
      </Card>
    </>
  );
}
export default DoctorCard;
