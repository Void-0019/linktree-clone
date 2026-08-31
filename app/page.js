"use client"

import { useEffect, useRef } from "react";

export default function Home() {

  const trackRef = useRef(null);

  useEffect(()=>{
    const track = trackRef.current;

    if(!track) return;

    let position = 0;
    let lastTime = performance.now();
    let animationFrame;

    const speed = 200;

    function animate(time){
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      position -= speed * delta;

      const cardHeight = 600;
      const gap = 40;
      const cardDistance = cardHeight + gap;

      if(Math.abs(position) >= cardDistance ){
        position += cardDistance;


        track.appendChild(track.children[0])
      }

      track.style.transform = `translateY(${position}px)`

      animationFrame = requestAnimationFrame(animate);
    }

    animationFrame = requestAnimationFrame(animate)

    return()=>{
      cancelAnimationFrame(animationFrame)
    };
  }, []);

  return (
    <main>
      <section className="bg-[#d2e823] min-h-screen grid grid-cols-2">
      <div className="flex items-center justify-center flex-col mx-[4vw] gap-10">
        <p className="text-[#254f1a] font-bold text-8xl">A link in bio built for you.</p>
        <p className="text-[#254f1a] text-2xl">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
      </div>
      <div className="h-screen flex items-center justify-center overflow-hidden">

        {/* Moving track */}
        <div ref={trackRef} className="flex flex-col gap-10">

          <div className="h-150 w-150 flex items-center justify-center">
            <img className= "rounded-4xl w-full h-full object-cover"
              src="/first.webp"
              alt="First"
            />
          </div>

          <div className="h-150 w-150 flex items-center justify-center">
            <img className= "rounded-4xl w-full h-full object-cover"
              src="/second.webp"
              alt="Second"
            />
          </div>

          <div className="h-150 w-150 flex items-center justify-center">
            <img className= "rounded-4xl w-full h-full object-cover"
              src="/third.webp"
              alt="Third"
            />
          </div>

          <div className="h-150 w-150 flex items-center justify-center">
            <img className= "rounded-4xl w-full h-full object-cover"
              src="/fourth.webp"
              alt="Fourth"
            />
          </div>

          <div className="h-150 w-150 flex items-center justify-center">
            <img className= "rounded-4xl w-full h-full object-cover"
              src="/fifth.webp"
              alt="Fifth"
            />
          </div>
      </div>
    </div>
      </section>

      <section className="bg-[#2665d6] min-h-screen">

      </section>
    </main>
  );
}
