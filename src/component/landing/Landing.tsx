//libraries
import React from "react";
import DetailSection from "./section/DetailSection";

//component
import HeroBox from "./section/HeroBox";
import HeroBoxMobile from "./section/HeroBoxMobile";
import MainSection from "./section/MainSection";
import VideoSection from "./section/VideoSection";

function Landing() {
  return (
    <div className="lg:w-full w-screen flex flex-col items-center">
      <div className="container mx-auto  w-full lg:px-[100px] sm:pt-[50px]">
        <div className="lg:block hidden">
          <HeroBox />
        </div>
        <div className="lg:hidden block">
          <HeroBoxMobile />
        </div>
      </div>
      {/* <div className="container mx-auto  w-full lg:px-[100px] ">
        <div className="w-full">
          <MainSection />
        </div>
      </div> */}
      <div className="container mx-auto  w-full lg:px-[100px] ">
        <div className="w-full">
          <DetailSection />
        </div>
      </div>
      <div className="container mx-auto  w-full lg:px-[100px] ">
        <div className="w-full">
          <VideoSection />
        </div>
      </div>
    </div>
  );
}

export default Landing;
