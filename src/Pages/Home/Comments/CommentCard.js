import React, { useState } from "react";

const CommentCard = ({ review }) => {
  const [rating, setRating] = useState(review.rating);
  const [hover, setHover] = useState(review.rating);

  const date = new Date(review.timeandDate);
  const time = new Date(review.timeandDate);
  console.log(review);

  return (
    <div>
      <div className="my-5 mx-4 mb-5">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={review.image} alt="" />
            </div>
          </div>

          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {review.Name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 h-20">
            {review.Comment}
          </p>
          <div className="star-rating text-5xl ">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return <span className="star text-yellow-400">&#9733;</span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
