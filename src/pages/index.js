import React from "react";
import styles from "@/styles/home.module.css";
import HeroImage from "@/components/HeroImage";
import ContentTile from "@/components/ContentTile";

export default function Home() {
  return (
    <>
      <div className={`${styles.home}`}>
        <HeroImage
          imageSource="./soccer.jpg"
          header="Join our Live Events"
          height='400px'
        />
        <div className="h-auto text-center my-12">
          <h1>Watch Live</h1>
          <div className="flex justify-around max-sm:flex-col items-center">
            <ContentTile url='https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29jY2VyfGVufDB8fDB8fHww' height='600px'/>
            <ContentTile url='https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvY2NlcnxlbnwwfHwwfHx8MA%3D%3D' height='300px'/>
            <ContentTile url='https://images.unsplash.com/photo-1517747614396-d21a78b850e8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvY2NlcnxlbnwwfHwwfHx8MA%3D%3D' height='600px'/>
          </div>
        </div>
        <HeroImage imageSource="./soccer2.jpg" header="Follow Our Journey" height="600px" backgroundPosition='top right'/>
      </div>
    </>
  );
}
