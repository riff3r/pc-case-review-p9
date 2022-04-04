import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <header className="py-5 bg-red-600 text-white">
      <div className="flex items-center justify-between max-w-md lg:max-w-lg xl:max-w-7xl  mx-auto">
        <Link className="text-4xl font-bold hidden md:block" to="/home">
          <span className="text-black">PC Case </span>
          Review
        </Link>

        <nav className="flex gap-10 text-center">
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
