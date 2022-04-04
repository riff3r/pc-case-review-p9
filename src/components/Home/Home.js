import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import useReviews from "../hooks/useReviews";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
  const [reviews] = useReviews();

  console.table(reviews);
  return (
    <main>
      <Banner />

      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-semibold mb-20 py-5 bg-red-600 text-white w-1/2 mx-auto">
          Customer Reviews{" "}
          <span className="text-black">({reviews.slice(0, 3).length})</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {reviews.slice(0, 3).map((review) => (
            <Review review={review} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/reviews"
            className=" px-7 py-5 rounded-lg bg-red-600 text-xl font-semibold text-white inline-block hover:text-black"
          >
            See All Review
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
