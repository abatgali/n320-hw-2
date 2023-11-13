import Link from "next/link";
import React from "react";

export default function BackToHome() {
  return (
    <>
      <div className="w-full flex">
        <Link href="/">
          <button className="bg-amber-500  text-white  p-2 rounded">
            Back to Home
          </button>
        </Link>
      </div>
    </>
  );
}
