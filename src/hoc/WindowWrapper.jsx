import { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { windows, focusWindow, closeWindow } = useWindowStore();
    const windowState = windows[windowKey] || {};
    const { isOpen, zIndex } = windowState;

    const ref = useRef(null);

    // 🔥 OPEN + CLOSE ANIMATION (UNIFIED)
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      if (isOpen) {
        el.style.display = "block";

        gsap.fromTo(
          el,
          { scale: 0.85, opacity: 0, y: 20 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power3.out",
          },
        );
      } else {
        gsap.to(el, {
          scale: 0.8,
          opacity: 0,
          y: 10,
          duration: 0.28,
          ease: "power3.inOut",
          onComplete: () => {
            el.style.display = "none";
            gsap.set(el, { scale: 1, opacity: 1, y: 0 });
          },
        });
      }
    }, [isOpen]);

    // 🔹 DRAGGABLE
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, []);

    // 🔥 CLICK OUTSIDE TO CLOSE
    useEffect(() => {
      if (!isOpen) return;

      const handleClickOutside = (e) => {
        const el = ref.current;
        if (!el) return;

        if (el.contains(e.target) || e.target.closest("#dock")) {
          return;
        }

        closeWindow(windowKey);
      };

      const timeout = setTimeout(() => {
        document.addEventListener("click", handleClickOutside);
      }, 0);

      return () => {
        clearTimeout(timeout);
        document.removeEventListener("click", handleClickOutside);
      };
    }, [isOpen, closeWindow, windowKey]);

    return (
      <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;
