import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import { calculateAvgRating } from "../../lib/calculateAvgRating";
const CourseCard = ({ course }) => {
  const { currency } = useContext(AppContext);
  return (
    <Link
      to={`/course/${course._id}`}
      onClick={() => scrollTo(0, 0)}
      className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg"
    >
      <img 
      className="w-full"
      src={course.courseThumbnail} alt={course.courseTitle} />
      <div className="p-3 text-left">
        <h3 className="text-base font-semibold">{course.courseTitle}</h3>
        <p className="text-gray-500">{course.educator.name}</p>
        <div className="flex items-center gap-2">
          <p>{calculateAvgRating(course.courseRatings)}</p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={
                i < Math.floor(calculateAvgRating(course.courseRatings))?assets.star
                :assets.star_blank} alt="star" className="size-3.5" />
            ))}
          </div>
          <p className="text-gray-500">{course.courseRatings.length}</p>
        </div>
        <p className="text-balance font-semibold text-gray-800">
          {currency}
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
