import Link from "next/link";
import React from "react";
import styles from "@/styles/nav.module.css";

export default function Nav() {
  return (
    <>
      <div
        className={`w-screen h-16 bg-gradient-to-tr from-red-700 via-amber-700 to-indigo-950 ${styles.nav}`}
      >
        <div className="flex mx-auto p-5 justify-around w-1/2 max-sm:w-full">
          <Link href={"/"}>Home</Link>
          <Link href={"/events"}>Events</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>
    </>
  );
}
