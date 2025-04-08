import React from "react";
import {assets} from "../../assets/assets"
const Companies = () => {
  return <div className="py-8 flex flex-col gap-5 md:gap-10">
    <p className="text-base text-gray-500">Trusted by Learners from</p>
    <div className="w-full flex flex-wrap items-center justify-center gap-6 md:gap-16">
      <img src={assets.microsoft_logo} alt="Microsoft" className="w-20 md:w-28" />
      <img src={assets.walmart_logo} alt="Walmart" className="w-20 md:w-28" />
      <img src={assets.accenture_logo} alt="accenture" className="w-20 md:w-28" />
      <img src={assets.adobe_logo} alt="Adob" className="w-20 md:w-28" />
      <img src={assets.paypal_logo} alt="Paypal" className="w-20 md:w-28" />
    </div>
  </div>;
};

export default Companies;
