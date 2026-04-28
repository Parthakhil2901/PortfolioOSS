import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import { gallery } from "#constants";

const Photos = () => {
  return (
    <>
      {/* HEADER */}
      <div id="window-header">
        <WindowControls target="photos" />
        <h2>Photos</h2>
      </div>

      {/* CONTENT */}
      <div className="bg-black h-full overflow-auto p-4">
        <div className="grid grid-cols-4 gap-4">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-lg cursor-pointer group"
            >
              <img
                src={item.img}
                alt="gallery"
                className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
