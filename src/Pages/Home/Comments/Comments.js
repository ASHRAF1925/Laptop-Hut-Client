import React from "react";
import useWindowDimensions from "../../../Hooks/useWindow";
import CommentCard from "./CommentCard";
import Slider from "react-slick";


const CommentItem = ({ reviews }) => {
  const windowsize = useWindowDimensions();

  let slidenumber = 3;
  console.log(reviews);

  var w = windowsize.width;
  if (w < 480) {
    slidenumber = 1;
  } else if (w > 480 && w < 900) {
    slidenumber = 2;
  } else if (w > 900) {
    slidenumber = 3;
  }

  console.log(w, slidenumber);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidenumber,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="bg-dark">
      {/* <Slider {...settings}> */}
      {reviews.map((review) => (
        <CommentCard review={review}></CommentCard>
      ))}

      {/* </Slider> */}
 
    </div>
  );
};

export default CommentItem;
