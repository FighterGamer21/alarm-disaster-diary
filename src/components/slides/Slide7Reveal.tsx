import SlideLayout from "../SlideLayout";
import classroomImg from "@/assets/slide7-classroom.png";

const Slide7Reveal = () => (
  <SlideLayout>
    <div className="flex h-full">
      {/* Left: Cartoon */}
      <div className="w-[55%] flex items-center justify-center p-[40px]">
        <img
          src={classroomImg}
          alt="Boy standing embarrassed at classroom door looking at mismatched shoes"
          className="max-h-[950px] rounded-lg object-contain"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
        />
      </div>
      {/* Right: Text */}
      <div className="w-[45%] flex flex-col justify-center pr-[160px] pl-[40px]">
        <h1 className="font-display font-bold text-[3.5rem] tracking-[-0.04em] text-balance leading-tight mb-[40px]">
          The Classroom Silence
        </h1>
        <p className="font-body text-[1.375rem] leading-relaxed text-pretty max-w-[480px]">
          I walked in. The teacher stopped. The class looked down. Then, the laughter.
          I looked down, too.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default Slide7Reveal;
