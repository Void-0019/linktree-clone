"use client"

import { useEffect, useRef } from "react";

export default function Home() {

  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    let position = 0;
    let lastTime = performance.now();
    let animationFrame;

    const speed = 200;

    function animate(time) {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      position -= speed * delta;

      const cardHeight = 600;
      const gap = 40;
      const cardDistance = cardHeight + gap;

      if (Math.abs(position) >= cardDistance) {
        position += cardDistance;


        track.appendChild(track.children[0])
      }

      track.style.transform = `translateY(${position}px)`

      animationFrame = requestAnimationFrame(animate);
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
    };
  }, []);

  return (
    <main>
      <section className="bg-[#d2e823] h-[125vh] grid grid-cols-2">
        <div className="flex items-center justify-center flex-col mx-[4vw] gap-5 m-90">
          <p className="text-[#254f1a]  text-8xl [-webkit-text-stroke:8px_currentColor] scale-y-90">A link in bio built for you.</p>
          <p className="text-[#254f1a] text-xl font-medium scaley-90">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="flex gap-6 w-full mt-8">
            <input placeholder="linktr.ee/" className=" bg-white border-white rounded-xl p-5 w-full placeholder:font-bold placeholder:text-xl" type="text" />
            <button className="w-full p-5 bg-[#254f1a] text-white font-bold rounded-4xl text-xl">Get started for free</button>
          </div>
        </div>
        <div className="h-[125vh] flex items-center justify-center overflow-hidden">

          {/* Moving track */}
          <div ref={trackRef} className="flex flex-col gap-10">

            <div className="h-150 w-150 flex items-center justify-center">
              <img className="rounded-4xl w-full h-full object-cover"
                src="/first.webp"
                alt="First"
              />
            </div>

            <div className="h-150 w-150 flex items-center justify-center">
              <img className="rounded-4xl w-full h-full object-cover"
                src="/second.webp"
                alt="Second"
              />
            </div>

            <div className="h-150 w-150 flex items-center justify-center">
              <img className="rounded-4xl w-full h-full object-cover"
                src="/third.webp"
                alt="Third"
              />
            </div>

            <div className="h-150 w-150 flex items-center justify-center">
              <img className="rounded-4xl w-full h-full object-cover"
                src="/fourth.webp"
                alt="Fourth"
              />
            </div>

            <div className="h-150 w-150 flex items-center justify-center">
              <img className="rounded-4xl w-full h-full object-cover"
                src="/fifth.webp"
                alt="Fifth"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2665d6] h-[115vh] grid grid-cols-2">
        <div className="flex justify-center items-center m-20">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="block w-full h-auto object-cover"
          >
            <source
              src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.mp4"
              type='video/mp4; codecs="hvc1"'
            />
            <source
              src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.webm"
              type="video/webm"
            />
          </video>
        </div>

        <div className="flex items-start justify-center flex-col mx-[4vw] gap-5">
          <p className="text-[#d2e823]  text-6xl [-webkit-text-stroke:4px_currentColor]">Create and <br /> customize your <br /> Linktree in minutes</p>
          <p className="text-white text-xl font-medium scaley-90">Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let Linktree automatically enhance it to match your brand and drive more clicks.</p>
          <button className="w-1/2 p-5 bg-[#d2e823] text-black font-bold rounded-4xl text-xl">Get started for free</button>
        </div>
      </section>

      <section className="bg-[#780016] h-[115vh] grid grid-cols-2">
        <div className="flex items-start justify-center flex-col mx-[4vw] gap-5">
          <p className="text-[#e9c0e9]  text-7xl [-webkit-text-stroke:5px_currentColor] scale-y-90">Share your Linktree <br /> anywhere you like!</p>
          <p className="text-white text-xl font-medium scaley-90">Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic back to your link in bio.</p>
          <button className="w-1/2 p-5 bg-[#e9c0e9] text-black font-bold rounded-4xl text-xl">Get started for free</button>
        </div>

        <div className="flex justify-center items-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-150 h-auto filter-[brightness(1.05)]"
          >
            <source src="/linkly_cards_loop.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="bg-[#e8efd6] h-[115vh] grid grid-cols-2">

        <div className="flex justify-center items-center">
          <img height={700} width={700} src="/analyze.avif" alt="analyze" />
        </div>

        <div className="flex items-start justify-center flex-col mx-[4vw] gap-5">
          <p className="text-[#1e2330]  text-7xl [-webkit-text-stroke:5px_currentColor] scale-y-90">Analyze your audience and keep them engaged</p>
          <p className="text-[#1e2330] text-xl font-medium scaley-90">Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.</p>
          <button className="w-1/2 p-5 bg-[#e9c0e9] text-[#1e2330] font-bold rounded-4xl text-xl">Get started for free</button>
          </div>

      </section>


      <section className="bg-[#f3f3f1] h-[200vh]">

        <div className="text-[#1e2330] text-7xl text-center pt-40 [-webkit-text-stroke:5px_currentColor]">The only link in bio trusted by 70M+</div>

      </section>
    </main>
  );
}
