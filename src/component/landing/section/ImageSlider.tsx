import React, { useState } from "react";
import { isTemplateExpression } from "typescript";

function ImageSlider({ images }) {
  const [showDetails, setShowDetails] = useState<any>(false);
  return (
    <div
      onMouseEnter={() => setShowDetails(true)}
      onMouseOut={() => setShowDetails(false)}
      className="relative overflow-hidden w-[150px] h-[100px] mx-[20px] rounded-lg"
    >
      <div
        className={`absolute w-full h-full rounded-lg z-10  cursor-pointer flex justify-center items-center text-white  ${
          showDetails
            ? "bg-black opacity-70 z-20 text-[18px] font-semibold"
            : ""
        }`}
      >
        {showDetails && images.lable}
      </div>
      <img src={images.url} className="absolute w-full h-full rounded-lg   " />
    </div>
  );
}

export default ImageSlider;
