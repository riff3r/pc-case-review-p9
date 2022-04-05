import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-9xl text-red-600 mb-4">404</h1>
      <h2 className="text-3xl mb-10">
        we are sorry, but the page you requested was not found
      </h2>

      <Link
        to="/"
        className=" px-8 py-4 rounded-lg bg-red-600 text-2xl font-semibold text-white inline-block hover:text-black"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
