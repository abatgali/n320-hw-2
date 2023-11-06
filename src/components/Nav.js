import Link from "next/link";
import React from "react";
import styles from "@/styles/nav.module.css";

export default function Nav() {
  return (
    <>
      <div
        className={`w-screen h-16 bg-gradient-to-tr from-red-700 to-zinc-600 ${styles.nav}`}
      >
        <div className="flex mx-auto p-5 justify-around w-1/2 max-sm:w-full">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Events</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </div>
      </div>
    </>
  );
}
