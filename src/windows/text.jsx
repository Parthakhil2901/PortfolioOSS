import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data;

  if (!data) return null;

  const { name, image, subtitle, description = [] } = data;

  return (
    <div className="flex h-full flex-col bg-white">
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="flex-1 overflow-auto p-5">
        {image && (
          <img
            src={image}
            alt={name}
            className="mb-4 max-h-56 w-full rounded-lg object-cover object-center"
          />
        )}

        {subtitle && (
          <h3 className="mb-3 text-base font-semibold text-gray-800">
            {subtitle}
          </h3>
        )}

        <div className="space-y-3 text-sm leading-6 text-gray-700">
          {description.map((paragraph, index) => (
            <p key={`${name}-${index}`}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
