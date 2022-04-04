import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

import "./Header.css";

// max-w-md lg:max-w-lg xl:max-w-7xl

const Header = () => {
  return (
    <header className="py-5 bg-red-600 text-white mb-20">
      <div className="flex items-center justify-between   container mx-auto">
        <Link className="text-4xl font-bold hidden md:block" to="/home">
          <span className="text-black">PC Case </span>
          Review
        </Link>

        <nav className="text-xl flex gap-10 text-center">
          <CustomLink to="/home">Home</CustomLink>
          <CustomLink to="/reviews">Reviews</CustomLink>
          <CustomLink to="/dashboard">Dashboard</CustomLink>
          <CustomLink to="/blog">Blog</CustomLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
