import React, { useContext } from "react";
import { UserButton, useClerk, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { assets } from "../../../assets/assets";
import { AppContext } from "../../../context/AppContext";

const Navbar = () => {
  const isCoursesPage = location.pathname.includes("/courses");

  const { openSignIn } = useClerk();
  const { isEducator } = useContext(AppContext);
  const { user } = useUser();
  return (
    <>
      {/* Medium & Large Screens */}
      <div
        className={`hidden md:flex items-center justify-between md:px-14 lg:px-36 border-b border-gray-500 py-4 ${
          isCoursesPage ? "bg-white" : "bg-cyan-100/70"
        }`}
      >
        <Link to="/">
          <img src={assets.logo} alt="logo" className="w-28 cursor-pointer" />
        </Link>
        <div className="hidden md:flex items-center gap-5 text-gray-500">
          <div className="flex items-center gap-3">
            {user && (
              <>
                <Link to="/educator">
                  {isEducator ? "Educator Dashboard" : "Become Educator"}
                </Link>{" "}
                | <Link to="/my-enrollments">My Enrollments</Link>
              </>
            )}
          </div>
          {user ? (
            <UserButton />
          ) : (
            <button
              onClick={() => openSignIn()}
              className="bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer"
            >
              Create Account
            </button>
          )}
        </div>
      </div>
      {/* Mobile Nav */}
      <div
        className={`md:hidden px-4 sm:px-10 py-4 flex flex-col gap-5 border-b border-gray-500 ${
          isCoursesPage ? "bg-white" : "bg-cyan-100/70"
        }`}
      >
        <div className="flex justify-between items-center">
          <img src={assets.logo} alt="logo" className="w-28 cursor-pointer" />

          <div className="flex">
            {user ? (
              <UserButton />
            ) : (
              <button
                onClick={() => openSignIn()}
                className="bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer"
              >
                Create Account
              </button>
            )}
          </div>
        </div>
        {user && (
          <div className="flex items-center justify-end gap-4 text-gray-500">
             <Link to="/educator">
                  {isEducator ? "Educator Dashboard" : "Become Educator"}
                </Link>
            <div>|</div>
            <Link to="/my-enrollments" className="block hover:bg-gray-100">
              My Enrollments
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
