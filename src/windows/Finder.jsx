import { WindowControls } from "#components";
import { Search } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window.js";
import { locations } from "#constants";
import clsx from "clsx";

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const openItem = (item) => {
    if (item.kind === "folder") {
      setActiveLocation(item);
      return;
    }

    if (item.fileType === "url" && item.href) {
      window.open(item.href, "_blank");
      return;
    }

    if (item.fileType === "img" && item.imageUrl) {
      openWindow("image", item);
      return;
    }

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

  const renderList = (items) =>
    items?.map((item) => (
      <li
        key={item.id}
        onClick={(e) => {
          if (e.defaultPrevented) return;
          setActiveLocation(item);
        }}
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
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar w-52 border-r p-2">
          <h3 className="text-xs text-gray-500 mb-2">Favourites</h3>
          <ul>{renderList(Object.values(locations))}</ul>
        </div>

        <div className="flex-1 p-4 flex flex-col gap-4 overflow-auto">
          <h3 className="text-lg font-semibold">
            {activeLocation?.name || "Work"}
          </h3>

          <ul className="relative w-full h-full">
            {currentItems.map((item) => (
              <li
                key={item.id}
                className={clsx(
                  "absolute flex flex-col items-center cursor-pointer group",
                  item.position || "top-5 left-5",
                )}
                onClick={(e) => {
                  if (e.defaultPrevented) return;
                  openItem(item);
                }}
              >
                <img
                  src={item.icon || item.imageUrl}
                  alt={item.name}
                  className="w-12 h-12 object-cover transition group-hover:scale-110"
                />
                <p className="mt-1 w-24 truncate text-center text-xs text-gray-800 drop-shadow-sm">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
