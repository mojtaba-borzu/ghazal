import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const images = [
  { id: 0, lable: "سبزی خوردن", url: "images/m1.jpg" },
  { id: 1, lable: "سبزی قرمه", url: "images/m2.jpg" },
  { id: 2, lable: "سبزی آش", url: "images/m3.jpg" },
  { id: 3, lable: "سبزی پلو", url: "images/m4.jpg" },
  { id: 4, lable: "رب", url: "images/m5.jpg" },
  { id: 5, lable: "ترشی", url: "images/m6.jpg" },
];

function MainSection() {
  return (
    <div className="mt-[100px] w-full flex flex-col items-center bg-gray-100 rounded-[100px] pb-[100px]">
      <div
        dir="rtl"
        className="mt-[50px] px-[50px] w-full text-[20px] font-medium"
      >
        محصولات
      </div>
      <div className="mt-[30px] md:w-2/3 w-11/12 flex justify-center">
        <Carousel
          autoPlay
          showArrows
          showStatus={false}
          showThumbs={false}
          infiniteLoop
        >
          {images.map((item) => (
            <div className="relative w-full md:h-[400px] h-[300px] bg-red-400">
              <img
                src={item.url}
                className=" w-full md:h-[400px] h-[300px] rounded-xl -z-10"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default MainSection;
