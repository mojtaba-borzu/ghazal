import React from "react";

function ImageSlider({ images }) {
  return (
    <div className="">
      <img
        src={images.url}
        className="w-[100px] h-[80px] rounded-lg mx-[10px]"
      />
    </div>
  );
}

export default ImageSlider;
