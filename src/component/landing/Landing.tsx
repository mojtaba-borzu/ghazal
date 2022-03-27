//libraries
import React from "react";

//component
import HeroBox from "./section/HeroBox";
import HeroBoxMobile from "./section/HeroBoxMobile";

function Landing() {
  return (
    <div className="w-screen flex justify-center">
      <div className="container mx-auto w-full lg:px-[100px] sm:pt-[50px]">
        <div className="lg:block hidden">
          <HeroBox />
        </div>
        <div className="lg:hidden block">
          <HeroBoxMobile />
        </div>
      </div>
    </div>
  );
}

export default Landing;
