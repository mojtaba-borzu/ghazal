//libraries
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import ImageSlider from "./ImageSlider";

const images = [
  { id: 0, lable: "سبزی خوردن", url: "images/m1.jpg" },
  { id: 1, lable: "سبزی قرمه", url: "images/m2.jpg" },
  { id: 2, lable: "سبزی آش", url: "images/m3.jpg" },
  { id: 3, lable: "سبزی پلو", url: "images/m4.jpg" },
  { id: 4, lable: "رب", url: "images/m5.jpg" },
  { id: 5, lable: "ترشی", url: "images/m6.jpg" },
];

function HeroBox() {
  return (
    <div className="relative w-full h-[700px] bg-gray-50   rounded-br-[150px] rounded-tl-[500px]">
      <div className="absolute w-full h-full ">
        <img
          src="images/heroBox.jpg"
          className="w-1/2 h-full rounded-tr-[500px] rounded-tl-[500px] border shadow-xl"
        />
      </div>
      <div
        dir="rtl"
        className="w-full p-[30px] text-[50px] text-green-700 font-semibold"
      >
        غزال شاهوار
      </div>
      <div
        dir="rtl"
        className="w-full mt-[100px] px-[30px] text-[30px] font-medium flex gap-2"
      >
        <span> محصولات ارگانیک</span>
        <span className="text-green-600">صیفی جات</span>
      </div>
      <div dir="rtl" className="w-full text-[18px] px-[30px]">
        سفارش محصولات خود از غزال شاهوار ...
      </div>
      <div className="w-full flex justify-end px-[30px] ">
        <div className="relative mt-[100px] w-1/2 h-[150px] bg-gray-300  rounded-xl flex justify-between items-center">
          <div className="absolute w-full h-full rounded-xl blur-sm"></div>
          <Marquee speed={10} gradient={false} direction="right">
            {images.map((item: any, index) => (
              <React.Fragment key={index}>
                <ImageSlider images={item} />
              </React.Fragment>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default HeroBox;
