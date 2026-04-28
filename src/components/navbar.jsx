import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import React from "react";
import useWindowStore from "#store/window.js";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  const tone = document.body.dataset.theme || "dark";

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        flex items-center justify-between px-4 py-2
        backdrop-blur-md border-b shadow-sm
        ${
          tone === "dark"
            ? "bg-black/20 text-white border-white/10"
            : "bg-white/30 text-black border-black/10"
        }
      `}
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <img src="/images/logo.svg" alt="logo" className="w-5 h-5" />

        <p className="font-semibold tracking-wide drop-shadow-sm">
          Akhilesh`s Portfolio
        </p>

        <ul className="flex items-center gap-4 ml-4">
          {navLinks.map(({ id, name, type }) => (
            <li
              key={id}
              onClick={() => openWindow(type)}
              className="cursor-pointer hover:opacity-80 transition"
            >
              <p className="text-sm">{name}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <ul className="flex items-center gap-3">
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img
                src={img}
                className="icon-hover opacity-90 hover:opacity-100 transition"
                alt={`icon-${id}`}
              />
            </li>
          ))}
        </ul>

        <time className="text-sm opacity-90 drop-shadow-sm">
          {dayjs().format("ddd MMM D h:mm A")}
        </time>
      </div>
    </nav>
  );
};

export default Navbar;
