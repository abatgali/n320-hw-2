import React from "react";
export default function HeroImage(props) {
  // console.log("props height ", props.height)
  return (
    <>
      <div
        className={`w-full object-cover relative bg-gradient-to-t from-amber-800 to-white`}
        style={{height: `${props.height}`}}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center mt-10">
          <h1 className={` text-5xl font-bold tracking-tight text-white `}>
            {props.header}
          </h1>
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full object-contain heroImage"
          id="soccer"
          style={{ backgroundImage: `url(${props.imageSource})`, backgroundPosition: `${props.backgroundPosition}` }}
        ></div>
      </div>
    </>
  );
}
