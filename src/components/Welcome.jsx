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

  const letters = Array.from(container.querySelectorAll("span"));
  const { min, max, default: defaultWeight } = FONT_WEIGHTS[type];
  let isActive = false;
  const letterTweens = letters.map((letter) => {
    const state = { weight: defaultWeight };
    const tweenTo = gsap.quickTo(state, "weight", {
      duration: 0.3,
      ease: "power2.out",
      onUpdate: () => {
        letter.style.fontVariationSettings = `"wght" ${state.weight}`;
      },
    });

    return { state, tweenTo };
  });

  const resetLetters = () => {
    if (!isActive) return;
    isActive = false;

    letterTweens.forEach(({ tweenTo }) => {
      tweenTo(defaultWeight);
    });
  };

  const handleMouseMove = (e) => {
    const { left, right, top, bottom } = container.getBoundingClientRect();

    if (
      e.clientX < left ||
      e.clientX > right ||
      e.clientY < top ||
      e.clientY > bottom
    ) {
      resetLetters();
      return;
    }

    isActive = true;
    const mouseX = e.clientX - left;

    letters.forEach((letter, index) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const center = l - left + w / 2;

      const distance = Math.abs(mouseX - center);
      const intensity = Math.exp(-(distance ** 2) / 2000);
      const weight = min + (max - min) * intensity;

      letterTweens[index].tweenTo(weight);
    });
  };

  const handleMouseLeave = () => {
    resetLetters();
  };

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseleave", handleMouseLeave);
    letterTweens.forEach(({ state, tweenTo }) => {
      tweenTo.tween?.kill();
      gsap.killTweensOf(state);
    });
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

  return (
    <section
      id="welcome"
      className={`pointer-events-none relative w-full h-full ${
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
      <p ref={subtitleRef} className="relative z-10 drop-shadow-lg">
        {renderText(
          "Hey! I`m Akhilesh Welcome to my",
          "text-3xl font-georama",
          300,
        )}
      </p>

      <h1 ref={titleRef} className="relative z-10 mt-7 drop-shadow-lg">
        {renderText("Portfolio", "text-9xl italic font-georama")}
      </h1>

      <div className="small-screen">
        <p>This Portfolio is designed for Desktop/Tablet screens only</p>
      </div>
    </section>
  );
};

export default Welcome;
