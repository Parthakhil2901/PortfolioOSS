import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { socials } from "#constants";

const Contact = () => {
  return (
    <>
      {/* HEADER */}
      <div id="window-header">
        <WindowControls target="contact" />
        <h2 className="text-sm font-medium">Contact</h2>
      </div>

      {/* BODY */}
      <div className="h-full flex items-center justify-center px-6">
        <div className="flex gap-12 items-center">
          {/* LEFT */}
          <div className="flex flex-col items-center text-center space-y-4">
            <img
              src="/images/profile.webp"
              alt="Akhilesh"
              className="w-24 h-24 rounded-full object-cover shadow-md"
            />

            <h3 className="text-lg font-semibold">Let’s Connect</h3>

            <p className="text-sm text-gray-500 max-w-[220px]">
              Got an idea? or just wanna talk tech? I’m in!
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            {socials.map(({ id, bg, link, icon, text }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: bg }}
                className="
                  flex items-center justify-center gap-2
                  px-5 py-3
                  rounded-lg
                  text-white
                  font-medium text-sm
                  shadow-md
                  hover:scale-[1.03]
                  active:scale-95
                  transition
                  w-[200px]
                "
              >
                <img src={icon} alt={text} className="w-4 h-4" />
                <span>{text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
