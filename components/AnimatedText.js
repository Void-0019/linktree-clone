"use client"

import { useEffect, useState } from "react"
import React from 'react'

const Animate = () => {
  const words = [
    "fashion designers",
    "culture creators",
    "merch sellers",
    "indie artists",
    "writers",
    "DJs",
    "touring companies",
    "labels",
    "live events",
    "brand collaborations",
    "publishers",
    "creators",
    "influencers",
    "atheletes",
    "models",
    "monitizers",
    "health educators",
    "streamers",
    "vloggers",
    "retailers",
    "products",
    "wellness readers",
    "musicains",
    "bands",
  ];

  const [index, setIndex] = useState(0)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true)

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length)
        setAnimate(false);
      }, 600)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  const nextIndex = (index + 1) % words.length

  return (
    <div className="text-[#2665D6]">
      <p className="text-[#1e2330] text-7xl text-center pt-40 [-webkit-text-stroke:5px_currentColor]">The only link in bio trusted by 70M+</p>

      <div className="h-18 overflow-hidden text-center [-webkit-text-stroke:3px_currentColor]">
        <p className={`text-6xl font-black transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${animate ? "-translate-y-full" : "translate-y-0"}`}>
          {words[index]}
        </p>
      </div>

    </div>
  )
}

export default Animate
