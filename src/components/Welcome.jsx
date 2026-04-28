import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { wallpapers } from "#constants";

const FONT_WEIGHTS = {
  subtitle: { min: 300, max: 600, default: 300 },
  title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{ fontVariationSettings: `"wght" ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (container, type) => {
  if (!container) return () => {};

  const letters = container.querySelectorAll("span");
  const { min, max } = FONT_WEIGHTS[type];

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const center = l - left + w / 2;

      const distance = Math.abs(mouseX - center);
      const intensity = Math.exp(-(distance ** 2) / 2000);
      const weight = min + (max - min) * intensity;

      gsap.to(letter, {
        fontVariationSettings: `"wght" ${weight}`,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      gsap.to(letter, {
        fontVariationSettings: `"wght" ${FONT_WEIGHTS[type].default}`,
        duration: 0.3,
      });
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  // 🔥 NO-FLICKER RANDOM WALLPAPER (runs before render)
  const [wallpaper] = useState(() => {
    return wallpapers[Math.floor(Math.random() * wallpapers.length)];
  });

  // 🔥 PRELOAD IMAGE (ensures smooth load)
  useEffect(() => {
    const img = new Image();
    img.src = wallpaper.src;
  }, [wallpaper]);

  // 🔥 GLOBAL THEME SYNC
  useEffect(() => {
    document.body.dataset.theme = wallpaper.tone;
  }, [wallpaper]);

  useGSAP(() => {
    const titleCleanup = setupTextHover(titleRef.current, "title");
    const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");

    return () => {
      subtitleCleanup();
      titleCleanup();
    };
  });

  useEffect(() => {
    setupTextHover(titleRef.current, "title");
    setupTextHover(subtitleRef.current, "subtitle");
  }, []);

  return (
    <section
      id="welcome"
      className={`relative w-full h-full ${
        wallpaper.tone === "dark" ? "text-white" : "text-black"
      }`}
    >
      {/* 🔥 BACKGROUND */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${wallpaper.src})` }}
      />

      {/* 🔥 OVERLAY FOR CONSISTENT CONTRAST */}
      <div className="absolute inset-0 -z-10 bg-black/10" />

      {/* 🔥 CONTENT */}
      <p ref={subtitleRef} className="drop-shadow-lg">
        {renderText(
          "Hey! I`m Akhilesh Welcome to my",
          "text-3xl font-georama",
          300
        )}
      </p>

      <h1 ref={titleRef} className="mt-7 drop-shadow-lg">
        {renderText("Portfolio", "text-9xl italic font-georama")}
      </h1>

      <div className="small-screen">
        <p>This Portfolio is designed for Desktop/Tablet screens only</p>
      </div>
    </section>
  );
};

export default Welcome;