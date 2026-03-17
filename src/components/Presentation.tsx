import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";
import Slide1Hook from "./slides/Slide1Hook";
import Slide2Plan from "./slides/Slide2Plan";
import Slide3Silence from "./slides/Slide3Silence";
import Slide4Realization from "./slides/Slide4Realization";
import Slide5Frenzy from "./slides/Slide5Frenzy";
import Slide6Walk from "./slides/Slide6Walk";
import Slide7Reveal from "./slides/Slide7Reveal";
import Slide8Epilogue from "./slides/Slide8Epilogue";

const slides = [
  Slide1Hook,
  Slide2Plan,
  Slide3Silence,
  Slide4Realization,
  Slide5Frenzy,
  Slide6Walk,
  Slide7Reveal,
  Slide8Epilogue,
];

const Presentation = () => {
  const [current, setCurrent] = useState(0);
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>();

  const updateScale = useCallback(() => {
    if (containerRef.current) {
      const { clientWidth, clientHeight } = containerRef.current;
      setScale(Math.min(clientWidth / 1920, clientHeight / 1080));
    }
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [updateScale]);

  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, slides.length - 1)), []);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "Escape" && isFullscreen) {
        document.exitFullscreen?.();
      }
      if (e.key === "f" || e.key === "F5") {
        e.preventDefault();
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev, isFullscreen]);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    clearTimeout(hideTimer.current);
    if (isFullscreen) {
      hideTimer.current = setTimeout(() => setShowControls(false), 2000);
    }
  };

  const CurrentSlide = slides[current];

  return (
    <div
      ref={containerRef}
      className="slide-container cursor-none"
      onMouseMove={handleMouseMove}
      onClick={next}
      style={{ cursor: showControls ? "default" : "none" }}
    >
      <div className="slide-viewport">
        <div
          className="slide-canvas"
          style={{ transform: `scale(${scale})` }}
        >
          <CurrentSlide />
        </div>
      </div>

      {/* Navigation controls */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={prev}
          disabled={current === 0}
          className="w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center hover:bg-foreground/20 transition-colors disabled:opacity-30"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="font-body text-sm text-muted-foreground tabular-nums min-w-[60px] text-center">
          {current + 1} / {slides.length}
        </span>
        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center hover:bg-foreground/20 transition-colors disabled:opacity-30"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        <button
          onClick={toggleFullscreen}
          className="w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center hover:bg-foreground/20 transition-colors ml-2"
        >
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
        </button>
      </div>

      {/* Slide indicator dots */}
      <div
        className={`absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              i === current ? "bg-foreground w-4" : "bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Presentation;
