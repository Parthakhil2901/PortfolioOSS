import { WindowControls } from "#components";
import { Search } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window.js";
import { locations } from "#constants";
import clsx from "clsx";
import { useState } from "react"; // 🔥 ADDED

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const [preview, setPreview] = useState(null); // 🔥 ADDED

  // 🔥 FIXED: REAL BEHAVIOR
  const openItem = (item) => {
    // 📁 Folder → navigate
    if (item.kind === "folder") {
      setActiveLocation(item);
      return;
    }

    // 🌐 URL → open link
    if (item.fileType === "url" && item.href) {
      window.open(item.href, "_blank");
      return;
    }

    // 🖼 Image → open image
    if (item.fileType === "img" && item.imageUrl) {
      setPreview(item.imageUrl); // 🔥 CHANGED (was window.open)
      return;
    }

    // 📄 PDF
    if (item.fileType === "pdf") {
      window.open("/files/resume.pdf", "_blank");
      return;
    }

    if (item.fileType === "txt") {
      openWindow("txtfile", item);
      return;
    }

    console.log("Unknown item:", item);
  };

  // 🔁 Sidebar list
  const renderList = (items) =>
    items?.map((item) => (
      <li
        key={item.id}
        onClick={() => setActiveLocation(item)}
        className={clsx(
          "flex items-center gap-2 cursor-pointer px-2 py-1 rounded transition",
          activeLocation?.id === item.id ? "bg-gray-200" : "hover:bg-gray-100",
        )}
      >
        <img src={item.icon} className="w-4" alt={item.name} />
        <p className="text-sm font-medium truncate">{item.name}</p>
      </li>
    ));

  const currentItems = activeLocation?.children || [];

  return (
    <>
      {/* HEADER */}
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      {/* BODY */}
      <div className="bg-white flex h-full">
        {/* SIDEBAR */}
        <div className="sidebar w-52 border-r p-2">
          <h3 className="text-xs text-gray-500 mb-2">Favourites</h3>
          <ul>{renderList(Object.values(locations))}</ul>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 p-4 flex flex-col gap-4 overflow-auto">
          <h3 className="text-lg font-semibold">
            {activeLocation?.name || "Work"}
          </h3>

          {/* 🔥 REAL FINDER GRID */}
          <ul className="relative w-full h-full">
            {currentItems.map((item) => (
              <li
                key={item.id}
                className={clsx(
                  "absolute flex flex-col items-center cursor-pointer group",
                  item.position || "top-5 left-5",
                )}
                onClick={() => openItem(item)}
              >
                <img
                  src={item.imageUrl || item.icon}
                  alt={item.name}
                  className="w-12 h-12 object-cover transition group-hover:scale-110"
                />
                <p className="text-xs mt-1 text-center w-24 truncate">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 🔥 IMAGE PREVIEW OVERLAY (ADDED) */}
      {preview && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
          onClick={() => setPreview(null)}
        >
          <img
            src={preview}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
