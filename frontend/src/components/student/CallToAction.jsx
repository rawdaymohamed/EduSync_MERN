import React from "react";
import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0">
      <h1 className="text-xl md:text-4xl mb-2 text-gray-800 font-semibold">
        Learn anything, anytime, anywhere
      </h1>
      <p className="text-gray-500 sm:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolore?
        Rerum quidem neque similique architecto.
      </p>
      <div className="flex items-center gap-5 font-medium mt-4">
        <button className="cursor-pointer px-10 py-3 rounded-md text-white bg-blue-600">Get Started</button>
        <button className="cursor-pointer flex items-center gap-2">
          Learn More <img src={assets.arrow_icon} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
