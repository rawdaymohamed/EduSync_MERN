import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-20 md:pt-28 px-7 md:px-0 space-y-8 text-center bg-gradient-to-b from-cyan-100/70">
      <h1 className="text-2xl md:text-3xl lg:text-4xl relative font-bold text-gray-800 max-w-4xl mx-auto">
        Teach. Learn. Grow.{" "}
        <span className="text-blue-600">All in One Platform.</span>
        <img
          src={assets.sketch}
          alt="sketch"
          className="hidden md:block absolute -bottom-6 right-0"
        />
      </h1>
      <p className="text-md md:text-lg text-gray-700 max-w-sm md:max-w-2xl mx-auto">
        Whether you're here to share your knowledge or expand it, our platform
        empowers educators to create and publish courses, and students to
        discover and enroll in learning experiences that fit their goals.
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;
