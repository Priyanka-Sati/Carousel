import React, { useRef } from "react";
import { products } from "../localFiles/product";
import "./style.css";

const ScrollableProductList = () => {
  const carouselContainer = useRef();

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({ left: scrollAmount, behaviour: "smooth" });
  };

  return (
    <div className="carouselDiv" >
      <div className="left arrow" onClick={() => navigation("left")}>
        ←
      </div>
      <div className="right arrow" onClick={() => navigation("right")}>
        →
      </div>

      <div className="carouselItems" ref={carouselContainer}>
        {products.map((item) => (
          <div className="carouselItem">
            <div className="carouselItem_poster">
              <img src={item.icon}></img>
            </div>
            <div className="carouselItem_detail">
              <p className="title">{item.title}</p>
              <p className="price">{`$ ${item.price}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableProductList;
