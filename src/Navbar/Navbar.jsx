import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ToggleBtn from "../assets/img/cdown.svg";
import ToggleClose from "../assets/img/close.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex min-w-screen max-w-screen justify-center">
      <div className="container w-5/6 flex flex-col lg:flex-col items-center justify-between">
        <div className="flex items-center justify-between w-full pt-14 lg:pt-0">
          <h1 className="font-gloria-hallelujah text-tertiary text-5xl font-bold drop-shadow-md lg:text-8xl lg:mx-auto lg:mb-8 lg:mt-8">
            ZELiNART
          </h1>
          <button
            className={`lg:hidden flex items-center p-2 transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : "rotate-0"
            }`}
            onClick={handleToggleClick}
          >
            <img
              src={isMenuOpen ? ToggleClose : ToggleBtn}
              alt="Toggle Menu"
              className="w-8 h-8"
            />
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center relative lg:space-x-4 mt-4 lg:mt-0`}
        >
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute -left-48 bg-tertiary/80 w-96 flex flex-col justify-center items-center z-20 md:left-0 lg:flex lg:bg-transparent lg:relative lg:flex-row lg:h-auto lg:inset-auto lg:top-auto lg:transform-none lg:translate-y-0 lg:gap-4`}
          >
            <li className="nav-item px-8 py-1 rounded-full text-secondary text-lg font-semibold transition-transform ease-in-out duration-300 hover:scale-105 drop-shadow-lg lg:text-tertiary lg:bg-secondary">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item px-8 py-1 rounded-full text-secondary text-lg font-semibold transition-transform ease-in-out duration-300 hover:scale-105 drop-shadow-lg  lg:text-tertiary lg:bg-secondary">
              <NavLink className="nav-link" to="/comission">
                Commissions
              </NavLink>
            </li>
            <li className="nav-item px-8 py-1 rounded-full text-secondary text-lg font-semibold transition-transform ease-in-out duration-300 hover:scale-105 drop-shadow-lg  lg:text-tertiary lg:bg-secondary">
              <NavLink className="nav-link" to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item px-8 py-1 rounded-full text-secondary text-lg font-semibold transition-transform ease-in-out duration-300 hover:scale-105 drop-shadow-lg   lg:text-tertiary lg:bg-secondary     ">
              <NavLink className="nav-link" to="/tos">
                T.O.S
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
