import React from "react";

function Footer() {
  return (
    <div className="mt-[50px] py-[50px] w-full flex flex-col items-center border-t border-black gap-[20px]">
      <div>
        <a className="flex flex-col items-center" href="tel:09128484835">
          {" "}
          <span>شماره تماس جهت سفارش محصولات</span> <span>09128484835</span>
        </a>
      </div>
      <div className="text-[12px]">
        کلیه حقوق این سایت مربوط به شرکت سهامی غزال شاهوار می باشد
      </div>
    </div>
  );
}

export default Footer;
