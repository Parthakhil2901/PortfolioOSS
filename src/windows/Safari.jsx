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
} from "lucide-react";
// adjust if your path differs
import { blogPosts } from "#constants/index.js";

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />

        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />

          <div className="search flex items-center gap-2">
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

      <div className="blog">
        <h2>My Developer Blog</h2>

        <div className="space-y-8">
          {blogPosts.map(({ id, image, title, date, link }) => (
            <div key={id} className="blog-post grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <img src={image} alt={title} />
              </div>

              <div>
                <p className="text-xs text-gray-500">{date}</p>
                <h3 className="font-semibold">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");
export default SafariWindow;
