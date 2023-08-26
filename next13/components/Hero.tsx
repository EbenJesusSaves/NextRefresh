'use client'
import React from "react";
import CustomBtn from "./CustomBtn";
import carBg from '../public/hero-bg.png'
import car from '../public/hero.png'
import Image from "next/image";
const Hero = () => {
const handleScroll = ()=>{

}


  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <div className="hero__title">Search for the best Cars</div>
        <p className="hero__subtitle">
          Get all used cars at an affordable deals at out shop come now
        </p>
        <CustomBtn
        title= "Explore Cars"
        btnType="button"
        containerStyles='bg-primary-blue text-white rounded-full mt-10'
        handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src={car} alt="hello" fill className="object-contain" />
          <div className="hero__image-overlay"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
