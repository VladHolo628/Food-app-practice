import React from "react";
import heroImg from "../img/hero.jpg";

export const Hero = () => {
  return (
    <div className="flex py-2 items-center">
      <img className="w-1/2 rounded-md shadow-lg" src={heroImg} alt="" />
      <div className="w-1/3 pl-4">
        <h1 className="text-mainHeader mb-4 ">We deliver Japan</h1>
        <p className="mb-10 text-2xl text-right text-purple-700">美味しい !</p>
        <p className="text-lg">
          Food allows people to explore and experience cultures around the
          world, making it possible to appreciate what each has to offer. Even
          if you’ve never been to Japan, you can have a small taste of Japanese
          culture right in your kitchen.
        </p>
      </div>
    </div>
  );
};
