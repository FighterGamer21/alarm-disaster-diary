import SlideLayout from "../SlideLayout";
import silenceImg from "@/assets/slide3-silence.png";

const Slide3Silence = () => (
  <SlideLayout>
    <div className="flex h-full">
      {/* Left: Cartoon */}
      <div className="w-[55%] flex items-center justify-center p-[40px]">
        <img
          src={silenceImg}
          alt="Boy sleeping deeply, turning off alarm in his sleep with Z's floating"
          className="max-h-[900px] rounded-lg object-contain"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
        />
      </div>
      {/* Right: Text */}
      <div className="w-[45%] flex flex-col justify-center pr-[160px] pl-[40px]">
        <h1 className="font-display font-bold text-[4rem] tracking-[-0.04em] text-slide-accent mb-[32px]">
          07:00 AM
        </h1>
        <p className="font-body text-[1.375rem] leading-relaxed text-pretty max-w-[480px] mb-[60px]">
          The betrayal wasn't a sound. It was the lack of one. I turned it off in a dream state.
          Total silence for two hours.
        </p>
        <span className="font-body text-[1.125rem] text-muted-foreground tracking-[0.3em]">
          [ Silence ]
        </span>
      </div>
    </div>
  </SlideLayout>
);

export default Slide3Silence;
