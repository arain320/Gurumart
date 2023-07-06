import React from "react";
import heroImage from "../../assets/heroimage.png";
import heroImage2 from "../../assets/heroimage2.png";

const Hero = () => {
  return (
    <>
      <section className="max-w-[1280px] mx-auto w-full ">
        <div className="w-full bg-slate-500">
          <picture>
            <source
              media="(min-width:1000px)"
              srcSet={heroImage}
              className="w-full"
            />
            <img src={heroImage2} alt="" className="w-full" />
          </picture>
        </div>
      </section>
    </>
  );
};

export default Hero;
