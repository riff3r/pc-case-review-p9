import React from "react";

const Review = ({ review }) => {
  return (
    <div className=" border rounded">
      <div>
        <img
          className="max-w-full h-auto object-cover"
          src={review.productImage}
          alt={review.title}
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between text-xl font-semibold mb-2">
          <h3>{review.title}</h3>
          <h3>Ratings: {review.rating}</h3>
        </div>

        <div className="flex justify-between mb-3 text-gray-500">
          <h3 className="text-lg">
            By <span className="text-red-600">{review.username}</span>
          </h3>
          <span>{review.date}</span>
        </div>

        <div className="text-gray-700">
          <p>{review.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
