import SlideLayout from "../SlideLayout";
import panicImg from "@/assets/slide4-panic.png";

const Slide4Realization = () => (
  <SlideLayout>
    <div className="flex h-full">
      {/* Left: Text */}
      <div className="w-[40%] flex flex-col justify-center pl-[160px] pr-[40px]">
        <h1 className="font-display font-bold text-[5rem] tracking-[-0.04em] leading-none mb-[32px]">
          09:00 AM
        </h1>
        <p className="font-body text-[1.375rem] leading-relaxed text-pretty max-w-[480px]">
          Panic isn't a word; it's a heart rate. Two hours late. Notes half-packed.
          A whirlwind of bad decisions.
        </p>
      </div>
      {/* Right: Cartoon */}
      <div className="w-[60%] flex items-center justify-center p-[40px]">
        <img
          src={panicImg}
          alt="Boy waking up in total panic seeing the clock at 9:00"
          className="max-h-[950px] rounded-lg object-contain"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}
        />
      </div>
    </div>
  </SlideLayout>
);

export default Slide4Realization;
