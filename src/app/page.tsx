import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <figure className="md:flex bg-pink-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
     <Image
      className="w-24 h-24 rounded-full mx-auto"
      src="/rehan.jpg"
      alt="Rehan"
      width={96} 
      height={96} 
    />
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium bg-red-400 py-10 ps-10 text-white border-2">
          “Muhammad Rehan is a dedicated and industrious individual known for his strong work ethic and commitment to excellence. He consistently demonstrates a proactive approach, tackling challenges with determination and perseverance. His hard work and reliability make him a valuable asset in any team or project.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400 bg-white bg-cover text-center">
          Muhammad Rehan
        </div>
        <div className="text-slate-700 dark:text-slate-500 text-red-500 bg-green-200 text-center">
          Staff Engineer, Pakistan
        </div>
      </figcaption>
    </div> 
  </figure>
  
    </main>
  );
}
