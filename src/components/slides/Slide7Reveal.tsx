import SlideLayout from "../SlideLayout";
import spotlightImg from "@/assets/slide7-spotlight.jpg";

const Slide7Reveal = () => (
  <SlideLayout dark>
    <div className="relative w-full h-full">
      <img
        src={spotlightImg}
        alt="Spotlight on mismatched shoes"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
      <div className="relative flex flex-col justify-center h-full px-[200px]">
        <h1 className="font-display font-bold text-[3.5rem] tracking-[-0.04em] text-balance leading-tight mb-[40px] text-slide-dark-fg">
          The Classroom Silence
        </h1>
        <p className="font-body text-[1.375rem] leading-relaxed text-pretty max-w-[640px] text-slide-dark-fg/90">
          I walked in. The teacher stopped. The class looked down. Then, the laughter. 
          I looked down, too.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default Slide7Reveal;
