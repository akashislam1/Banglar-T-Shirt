import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="bg-gray-300 p-5 rounded-md shadow-md hidden md:block">
        <ul className="flex gap-5 font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/review">Oreders Review</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden bg-gray-300 p-5 ">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <span>
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6 font-bold "></XMarkIcon>
            ) : (
              <Bars3Icon className="w-6 h-6 font-bold "></Bars3Icon>
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
