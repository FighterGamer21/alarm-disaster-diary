import SlideLayout from "../SlideLayout";
import clockImg from "@/assets/slide8-clock-ringing.png";

const LessonCard = ({ number, text }: { number: string; text: string }) => (
  <div
    className="flex-1 rounded-lg p-[40px] flex flex-col items-center text-center"
    style={{ boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05)" }}
  >
    <span className="font-display font-bold text-[3rem] text-slide-accent mb-[16px]">{number}</span>
    <p className="font-body text-[1.25rem] leading-relaxed">{text}</p>
  </div>
);

const Slide8Epilogue = () => (
  <SlideLayout>
    <div className="flex flex-col items-center justify-center h-full px-[160px]">
      <img
        src={clockImg}
        alt="Alarm clock showing 07:01 and ringing"
        className="w-[200px] mb-[48px]"
      />
      <h1 className="font-display font-bold text-[3.5rem] tracking-[-0.04em] text-balance text-center leading-tight mb-[64px]">
        Lessons from the Chaos
      </h1>
      <div className="flex gap-[40px] w-full max-w-[1400px]">
        <LessonCard number="01" text="Double-check the AM/PM." />
        <LessonCard number="02" text="Prepare the night before (actually)." />
        <LessonCard number="03" text="Look at your feet before you leave." />
      </div>
    </div>
  </SlideLayout>
);

export default Slide8Epilogue;
