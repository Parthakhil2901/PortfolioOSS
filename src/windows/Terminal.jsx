import WindowWrapper from "#hoc/WindowWrapper";
import { Check, Flag } from "lucide-react";
import { techStack } from "#constants/index.js";
import WindowControls from "#components/WindowControls.jsx";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech stack</h2>
      </div>

      <div className="tech-stack px-4 py-3 text-sm">
        {/* command line */}
        <p className="mb-3 text-gray-700">
          <span className="font-semibold">@Akhilesh % </span>
          show tech stack
        </p>

        {/* header */}
        <div className="label flex gap-4 border-b border-gray-300/50 pb-2 mb-2 text-sm text-gray-500">
          <p className="w-28">Category</p>
          <p>Technologies</p>
        </div>

        {/* content */}
        <ul className="content">
          {techStack.map(({ category, items }, index) => (
            <li
              key={index}
              className="flex items-start gap-4 py-2 border-b border-gray-200/40"
            >
              <Check className="text-green-500 mt-1" size={18} />

              <h3 className="w-28 font-semibold text-gray-700">{category}</h3>

              <p className="flex-1 text-gray-600 leading-relaxed">
                {items.join(", ")}
              </p>
            </li>
          ))}
        </ul>

        {/* footer */}
        <div className="footnote mt-3 text-xs text-gray-500">
          <p className="flex items-center gap-2">
            <Check size={14} className="text-green-500" />5 of 5 stacks loaded
            successfully (100%)
          </p>

          <p className="flex items-center gap-2 mt-1">
            <Flag size={12} />
            Render Time: 6ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;
