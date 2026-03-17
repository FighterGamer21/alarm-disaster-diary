import SlideLayout from "../SlideLayout";
import lessonImg from "@/assets/slide8-lesson.png";

const LessonCard = ({ number, text }: { number: string; text: string }) => (
  <div
    className="flex-1 rounded-lg p-[32px] flex flex-col items-center text-center"
    style={{ boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05)" }}
  >
    <span className="font-display font-bold text-[2.5rem] text-slide-accent mb-[12px]">{number}</span>
    <p className="font-body text-[1.125rem] leading-relaxed">{text}</p>
  </div>
);

const Slide8Epilogue = () => (
  <SlideLayout>
    <div className="flex h-full">
      {/* Left: Cartoon */}
      <div className="w-[50%] flex items-center justify-center p-[40px]">
        <img
          src={lessonImg}
          alt="Boy laughing with classmates, lesson learned"
          className="max-h-[900px] rounded-lg object-contain"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
        />
      </div>
      {/* Right: Lessons */}
      <div className="w-[50%] flex flex-col justify-center pr-[120px] pl-[40px]">
        <h1 className="font-display font-bold text-[3rem] tracking-[-0.04em] text-balance leading-tight mb-[48px]">
          Lessons from the Chaos
        </h1>
        <div className="space-y-[24px]">
          <LessonCard number="01" text="Double-check the AM/PM." />
          <LessonCard number="02" text="Prepare the night before (actually)." />
          <LessonCard number="03" text="Look at your feet before you leave." />
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide8Epilogue;
