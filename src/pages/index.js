import React from "react";
import styles from "@/styles/home.module.css";
import HeroImage from "@/components/HeroImage";

export default function Home() {
  return (
    <>
      <div className={`${styles.home}`}>
        <HeroImage
          imageSource="./soccer.jpg"
          header="Join our Live Soccer Matches"
        />
        <div className="h-auto text-center my-12">
          <h1>Watch Live</h1>
          <div className="flex justify-around max-sm:flex-col ">
            <div className="w-1/4 h-64 mt-12 border-solid border-s-white border-4 bg-slate-500 max-sm:w-3/4 mx-auto"></div>
            <div className="w-1/4 h-64 mt-12 border-solid border-s-white border-4 bg-slate-500 max-sm:w-3/4 mx-auto"></div>
            <div className="w-1/4 h-64 mt-12 border-solid border-s-white border-4 bg-slate-500  max-sm:w-3/4 mx-auto"></div>
          </div>
        </div>
        <HeroImage imageSource="./soccer2.jpg" header="Follow Our Journey" />
      </div>
    </>
  );
}
