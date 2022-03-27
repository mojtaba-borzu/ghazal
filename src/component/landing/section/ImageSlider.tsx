import React from "react";

function ImageSlider({ images }) {
  return (
    <div className="">
      <img
        src={images.url}
        className="w-[150px] h-[100px] rounded-lg mx-[20px]"
      />
    </div>
  );
}

export default ImageSlider;
