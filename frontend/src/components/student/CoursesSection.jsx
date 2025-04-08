import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const {allCourses} = useContext(AppContext);
  return (
    <div className="py-16 md:px-36 px-8 flex flex-col">
      <h2 className="text-3xl font-medium text-gray-800">Learn from the Best</h2>
      <p className="text-sm md:text-base text-gray-500 my-3">Discover the top-rated courses across various categories. From coding and design to business <br /> and wellness, our courses are crafted to deliver results.</p>
      <div className="grid grid-cols-auto gap-3 px-4 md:px-0 my-10 md:my-12">
        {allCourses.slice(0, 4).map((course)=><CourseCard key={course._id} course={course}/>)}

      </div>
      <Link to='/courses'
      className="w-fit mx-auto text-gray-500 border border-gray-500/30 px-10 py-3 rounded"
      onClick={()=>scrollTo(0, 0)}>Show all courses</Link>
    </div>
  );
};

export default CoursesSection;
