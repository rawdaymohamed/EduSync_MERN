import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  useEffect(()=>{
    fetchAllCourses();
  },)
  const fetchAllCourses = async ()=>{
    setAllCourses(dummyCourses);
  }
  const value = {currency, allCourses, isEducator, setIsEducator};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
