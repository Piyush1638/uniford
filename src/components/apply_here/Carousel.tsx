import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ScholarsCarousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Change slidesToShow based on screen width
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    // Call handleResize on initial load
    handleResize();

    // Listen to window resize events
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, // Use state variable to dynamically set slidesToShow
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-medium text-xl">Listen from our scholars</h3>
      <div className="px-3">
        <Slider {...settings}>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Slider>
      </div>
    </div>
  );
};

export default ScholarsCarousel;

const CarouselItem = () => (
  <div className="flex items-center gap-4 border border-gray-600 bg-white rounded-xl px-4 py-5 w-[calc((100% - 32px) / 2)]" style={{ margin: "0 8px" }}> {/* Calculate width for half item */}
    <Image
      src="/assets/images/profile.jpg"
      alt="profile"
      height={60}
      width={60}
      className="aspect-[3/2] rounded-full object-contain"
    />
    <div className="flex flex-col gap-4">
      <p className="font-medium text-xs text-[#6A6A6A]">
        Uniford conducts workshops and training sessions to equip users with the
        necessary skills and knowledge.
      </p>
      <h3 className="font-medium text-xs">John Doe</h3>
    </div>
  </div>
);
