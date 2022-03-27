import React from "react";

function VideoSection() {
  return (
    <div className="mt-[50px] w-full flex flex-col items-center bg-gray-100 rounded-[100px] pb-[50px] px-[50px]">
      <div
        dir="rtl"
        className="mt-[50px] px-[50px] w-full text-[20px] font-medium text-center sm:text-right"
      >
        طرز تهیه محصولات
      </div>
      <div className="w-full flex lg:flex-row flex-col-reverse items-center">
        <div className="lg:w-1/2 w-full flex justify-center">
          <video
            className="  rounded-xl"
            src="/images/video2.mp4"
            loop
            autoPlay
            muted
          />
        </div>
        <div
          dir="rtl"
          className="lg:w-1/2 w-full flex items-center text-justify px-[20px] py-[20px]"
        >
          در اکثر کشورها دستورالعمل های ایمنی غذایی بسیار دقیقی برای محافظت از
          مصرف کنندگان در برابر محصولات مضر وجود دارد. در این رابطه هر کشوری
          استاندارد خاص خود را برای تعریف محصولات ارگانیک دارد که با کشور دیگر
          متفاوت است. محصولات غذایی ارگانیک تحت سیستم کشاورزی ارگانیک و بدون
          استفاده از کودهای شیمیایی مضر و سموم دفع آفات با رویکردی مسئولانه از
          نظر زیست محیطی و اجتماعی رشد می کنند. در این روش کشاورزی با حفظ و
          احیاء ظرفیت باروری خاک ، تغذیه مناسب گیاه و مدیریت صحیح خاک اطراف گیاه
          محصولی سرشار از مواد مغذی و همچنین مقاوم در برابر بیماری ها تولید می
          شود. در این روش رشد گیاهان مستلزم زمان بیشتری است و محصولات بدست آمده
          به دلیل رشد طبیعی نسبت به سایرین سالم تر هستند
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
