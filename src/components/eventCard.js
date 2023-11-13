import React from "react";

export default function EventCard(props) {
  return (
    <div className="h-64 w-3/4 rounded-2xl flex justify-between shadow-lg bg-gradient-to-r from-orange-600 to-gray-800 ">
      <div
        style={{
          backgroundImage: `url(${props.imageSource})`,
          backgroundPosition: `${props.backgroundPosition}`,
          backgroundSize: "cover",
        }}
        className="w-3/4 max-sm:w-[500px] h-full backdrop-blur-sm rounded-xl"
      ></div>
      <div className="ml-3">
        <h1 className="max-sm:text-sm text-white">{props.eventName}</h1>
      </div>
    </div>
  );
}
