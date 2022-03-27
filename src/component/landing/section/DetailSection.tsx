import React from "react";

const images = [
  { id: 0, lable: "سبزی خوردن", url: "images/m1.jpg" },
  { id: 1, lable: "سبزی قرمه", url: "images/m2.jpg" },
  { id: 2, lable: "سبزی آش", url: "images/m3.jpg" },
  { id: 3, lable: "سبزی پلو", url: "images/m4.jpg" },
  { id: 4, lable: "رب", url: "images/m5.jpg" },
  { id: 5, lable: "ترشی", url: "images/m6.jpg" },
  { id: 4, lable: "رب", url: "images/m5.jpg" },
  { id: 5, lable: "ترشی", url: "images/m6.jpg" },
];
function DetailSection() {
  return (
    <div className="mt-[50px] w-full flex flex-col items-center bg-gray-100 rounded-[100px] pb-[50px] px-[50px]">
      <div
        dir="rtl"
        className="mt-[50px] px-[50px] w-full text-[20px] font-medium"
      >
        دستی بندی
      </div>
      <div className="mt-[20px] w-full flex flex-wrap justify-center gap-[10px]">
        {images.map((item) => (
          <div className="relative w-[300px] h-[200px] rounded-xl  overflow-hidden flex justify-end items-end cursor-pointer">
            <div className="absolute w-2/3 h-[30px] bg-white rounded-br-lg border rounded-tl-xl text-[12px] flex justify-center items-center z-10">
              {item.lable}
            </div>
            <img
              src={item.url}
              className="absolute w-full  h-[200px] rounded-xl hover:scale-125 duration-700"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailSection;
