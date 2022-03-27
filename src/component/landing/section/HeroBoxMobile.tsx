//libraries
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import ImageSliderMobile from "./ImageSliderMobile";

const images = [
  { id: 0, url: "images/m1.jpg" },
  { id: 1, url: "images/m2.jpg" },
  { id: 2, url: "images/m3.jpg" },
  { id: 3, url: "images/m4.jpg" },
  { id: 4, url: "images/m5.jpg" },
  { id: 5, url: "images/m6.jpg" },
  { id: 6, url: "images/m7.jpg" },
];

function HeroBox() {
  return (
    <div className="relative w-full h-[700px] bg-gray-50   ">
      <div className="absolute w-full h-full  ">
        <img
          src="images/heroBox.jpg"
          className="w-full h-full  border shadow-xl opacity-50 blur-sm "
        />
      </div>
      <div className="w-full h-full absolute z-20">
        <div
          dir="rtl"
          className="w-full sm:p-[30px] pt-[60px] text-[50px] text-green-700 font-semibold flex sm:justify-start justify-center "
        >
          <span className="drop-shadow-2xl">غزال شاهوار</span>
        </div>
        <div
          dir="rtl"
          className="w-full mt-[100px] px-[30px] sm:text-[30px] text-[22px] font-medium flex sm:justify-start justify-center gap-2"
        >
          <span> محصولات ارگانیک</span>
          <span className="text-green-900 drop-shadow-2xl">صیفی جات</span>
        </div>
        <div
          dir="rtl"
          className="w-full sm:text-[18px] text-[16px]  sm:text-right text-center px-[30px]"
        >
          سفارش محصولات خود از غزال شاهوار ...
        </div>
        <div className="w-full flex justify-end md:px-[30px] ">
          <div className="relative mt-[100px] w-full h-[120px] bg-gray-300  rounded-xl flex justify-between items-center">
            <div className="absolute w-full h-full rounded-xl blur-sm"></div>
            <Marquee speed={10} gradient={false} direction="right">
              {images.map((item: any) => (
                <ImageSliderMobile images={item} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBox;
