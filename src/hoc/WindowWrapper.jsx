import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { windows, focusWindow } = useWindowStore();
    const windowState = windows[windowKey] || {};
    const { isOpen, zIndex } = windowState;

    const ref = useRef(null);
    const suppressClickRef = useRef(false);

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

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      Draggable.get(el)?.kill();

      const header = el.querySelector("#window-header");
      const [instance] = Draggable.create(el, {
        trigger: header || el,
        minimumMovement: 8,
        onPress(event) {
          this.wasDragging = false;
          focusWindow(windowKey);

          if (event?.target?.closest?.("#window-controls")) {
            this.endDrag(event);
          }
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
      });

      return () => instance.kill();
    }, []);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{
          zIndex,
          display: isOpen ? "block" : "none",
        }}
        onClickCapture={(e) => {
          if (!suppressClickRef.current) return;
          e.preventDefault();
          e.stopPropagation();
        }}
        className="absolute w-[800px] h-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden shadow-2xl transition-all duration-200"
      >
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
