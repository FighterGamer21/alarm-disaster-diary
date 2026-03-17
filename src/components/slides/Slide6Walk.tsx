import SlideLayout from "../SlideLayout";
import runningImg from "@/assets/slide6-running.png";

const Slide6Walk = () => (
  <SlideLayout>
    <div className="flex h-full">
      {/* Left: Text */}
      <div className="w-[40%] flex flex-col justify-center pl-[160px] pr-[40px]">
        <h1 className="font-display font-bold text-[3.5rem] tracking-[-0.04em] text-balance leading-tight mb-[40px]">
          The Drumbeat
        </h1>
        <p className="font-body text-[1.375rem] leading-relaxed text-pretty max-w-[480px]">
          Running to school. Neighbors staring. My heart beating like a drum.
          I thought they were impressed by my speed.
        </p>
      </div>
      {/* Right: Cartoon */}
      <div className="w-[60%] flex items-center justify-center p-[40px]">
        <img
          src={runningImg}
          alt="Boy sprinting to school while neighbors stare in surprise"
          className="max-h-[950px] rounded-lg object-contain"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
        />
      </div>
    </div>
  </SlideLayout>
);

export default Slide6Walk;
