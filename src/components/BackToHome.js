import Link from "next/link";
import React from "react";

export default function BackToHome() {
  return (
    <>
      <div className="w-full flex">
        <Link href="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to Home
          </button>
        </Link>
      </div>
    </>
  );
}
