import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-300 p-5 rounded-md shadow-md ">
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
  );
};

export default Header;
