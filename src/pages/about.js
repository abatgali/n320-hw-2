import React from "react";
import HeroImage from "@/components/HeroImage";
export default function About() {
  return (
    <>
      <HeroImage
        imageSource="./abouthero.jpg"
        header="About Us"
        height="500px"
        backgroundPosition="center center"
      />
      <div className="container mx-auto p-10 text-lg text-center">
        <p>
          We are a premier event organizing company specializing in sports-related events. Our team of dedicated professionals works tirelessly to provide unforgettable experiences for both participants and spectators. We believe in the power of sports to bring people together, foster community, and create lasting memories. Join us for our next event and experience the thrill of the game!
        </p>
        <p className="mt-6">
          With years of experience in the industry, we have a deep understanding of what makes an event successful. We focus on every detail, from the initial planning stages to the final execution, ensuring that each event we organize is unique and memorable. Our events are not just about competition, but also about celebrating the spirit of sportsmanship and camaraderie. Come, be a part of our journey and create your own unforgettable moments.
        </p>
      </div>
    </>
  );
}
