"use client";

import { useEffect } from "react";

export default function useInfiniteCarousel(
  trackRef,
  {
    direction = "up",
    speed = 200,
    gap = 40,
    pauseOnHover = false,
  } = {}
) {
  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    let position = 0;
    let lastTime = performance.now();
    let animationFrame;
    let isPaused = false;

    const isHorizontal =
      direction === "left" || direction === "right";

    function animate(time) {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isPaused) {
        const movement = speed * delta;

        if (direction === "up" || direction === "left") {
          position -= movement;
        } else {
          position += movement;
        }

        const card = track.children[0];

        if (card) {
          const rect = card.getBoundingClientRect();

          const cardSize = isHorizontal
            ? rect.width
            : rect.height;

          const distance = cardSize + gap;

          if (Math.abs(position) >= distance) {
            position += position < 0 ? distance : -distance;

            if (direction === "up" || direction === "left") {
              track.appendChild(track.children[0]);
            } else {
              track.prepend(track.children[track.children.length - 1]);
            }
          }
        }
      }

      track.style.transform = isHorizontal
        ? `translateX(${position}px)`
        : `translateY(${position}px)`;

      animationFrame = requestAnimationFrame(animate);
    }

    function handleMouseEnter() {
      isPaused = true;
    }

    function handleMouseLeave() {
      isPaused = false;
      lastTime = performance.now();
    }

    if (pauseOnHover) {
      track.addEventListener("mouseenter", handleMouseEnter);
      track.addEventListener("mouseleave", handleMouseLeave);
    }

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);

      if (pauseOnHover) {
        track.removeEventListener("mouseenter", handleMouseEnter);
        track.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [trackRef, direction, speed, gap, pauseOnHover]);
}