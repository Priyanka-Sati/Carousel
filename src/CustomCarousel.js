import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";

const CustomCarousel = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const products = [image1, image2, image3, image4, image5];

  const handleClick = (idx) => {
    if(idx === -1){
        setIndex(products.length-1)
    }
    else if(idx === products.length){
        setIndex(0)
    }
    else{
        setIndex(idx)
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
        if(!paused){
            handleClick(index+1);
        }
    }, 2000);

    return() => {
        if(interval){
            clearInterval(interval);
        }
    }
  });

  return (
    <div className="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
    >
      <button className="left" onClick={() => handleClick(index-1)}>
        <ArrowBackIosIcon />
      </button>

      <div className="carouselImg">
        <img src={products[index]} />
      </div>

      <button className="right" onClick={() => handleClick(index+1)}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};

export default CustomCarousel;
