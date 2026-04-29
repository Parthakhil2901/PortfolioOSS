import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window";

const ImagePreview = () => {
  const { windows } = useWindowStore();
  const item = windows.image?.data;

  if (!item) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="image" />
        <p className="w-full truncate text-center font-medium text-gray-600">
          {item.name}
        </p>
      </div>

      <div className="flex h-full items-center justify-center bg-neutral-950 p-4">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </>
  );
};

const ImagePreviewWindow = WindowWrapper(ImagePreview, "image");

export default ImagePreviewWindow;
