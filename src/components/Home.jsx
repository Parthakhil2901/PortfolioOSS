import { locations } from "#constants";
import clsx from "clsx";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import useWindowStore from "#store/window";
import useLocationStore from "#store/location";

// ✅ register plugin
gsap.registerPlugin(Draggable);

const Home = () => {
  const homeRef = useRef(null);
  const suppressClickRef = useRef(false);
  const projects = locations.work?.children ?? [];

  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const handleOpenProjectFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder", project);
  };

  useGSAP(() => {
    const folders = gsap.utils.toArray(".folder", homeRef.current);
    folders.forEach((folder) => Draggable.get(folder)?.kill());
    const instances = Draggable.create(folders, {
      bounds: "#home",

      // 🔥 differentiate click vs drag
      minimumMovement: 8,

      onPress() {
        this.wasDragging = false;
      },

      onDrag() {
        this.wasDragging = true;
      },

      onRelease() {
        if (this.wasDragging) {
          suppressClickRef.current = true;
          requestAnimationFrame(() => {
            suppressClickRef.current = false;
          });
        }
      },

      // optional polish
      cursor: "grab",
      activeCursor: "grabbing",
    });

    return () => {
      instances.forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <section
      id="home"
      ref={homeRef}
      className="absolute inset-0 z-10 h-screen"
    >
      <ul className="relative h-full">
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx(
              "group folder absolute flex w-24 cursor-pointer select-none flex-col items-center z-10",
              project.position || "top-5 left-5",
            )}
            onClick={(e) => {
              if (e.defaultPrevented || suppressClickRef.current) return;
              handleOpenProjectFinder(project);
            }}
          >
            <img
              src="/images/folder.png"
              alt={project.name}
              className="w-16 rounded-md p-1 transition group-hover:bg-gray-950/10"
            />

            <p className="mt-1 w-24 truncate rounded px-1 text-center text-xs text-white drop-shadow-md transition-colors group-hover:bg-blue-500">
              {project.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
