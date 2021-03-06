import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";

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

          <Rating
            initialRating={review.rating}
            emptySymbol={<FontAwesomeIcon icon={faStar} />}
            fullSymbol={
              <FontAwesomeIcon style={{ color: "#dc2626" }} icon={faStar} />
            }
            readonly
          ></Rating>
        </div>

        <div className="flex justify-between items-center mb-3 text-gray-500">
          <h3 className="flex items-center gap-2 text-lg">
            <img class="w-10 rounded-full" src={review.authorImage} alt="" />
            By <span className="text-red-600">{review.author}</span>
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
