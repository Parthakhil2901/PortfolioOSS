import { WindowControls } from "../components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {
  ChevronLeft,
  ChevronRight,
  PanelLeft,
  ShieldHalf,
  Search,
  Share,
  Plus,
  Copy,
  MoveRight,
} from "lucide-react";
import { blogPosts } from "#constants/index.js";

const Safari = () => {
  return (
    <div className="flex flex-col h-full">
      {/* HEADER */}
      <div id="window-header" className="flex items-center">
        <WindowControls target="safari" />

        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex items-center justify-center gap-3">
          <ShieldHalf className="icon" />

          <div className="search flex items-center gap-2 w-full max-w-md">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1 outline-none bg-transparent"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto p-5">
        <h2 className="text-xl font-semibold mb-6">My Developer Blog</h2>

        <div className="space-y-6">
          {blogPosts.map(({ id, image, title, date, link }) => (
            <div
              key={id}
              className="flex gap-6 items-start p-3 rounded-lg hover:bg-gray-100 transition"
            >
              {/* IMAGE */}
              <div className="w-40 h-40 shrink-0">
                <img
                  src={image}
                  alt={title}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>

              {/* TEXT */}
              <div className="flex flex-col gap-2 flex-1">
                <p className="text-xs text-gray-500">{date}</p>

                <h3 className="font-semibold text-lg leading-snug">{title}</h3>

                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-500 hover:underline"
                >
                  Check out the full post!
                  <MoveRight className="icon-hover" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");
export default SafariWindow;
