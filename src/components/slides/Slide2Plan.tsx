import SlideLayout from "../SlideLayout";
import planImg from "@/assets/slide2-plan.png";

const Slide2Plan = () => (
  <SlideLayout>
    <div className="flex h-full">
      {/* Left: Text */}
      <div className="w-[45%] flex flex-col justify-center pl-[160px] pr-[60px]">
        <h1 className="font-display font-bold text-[3.5rem] tracking-[-0.04em] text-balance leading-tight mb-[40px]">
          The Perfect Plan
        </h1>
        <p className="font-body text-[1.375rem] leading-relaxed text-pretty max-w-[520px]">
          The night before, I was a genius. Bag packed. Clothes laid out. Three alarms set.
          I went to bed confident that tomorrow would be smooth and stress-free.
        </p>
      </div>
      {/* Right: Cartoon */}
      <div className="w-[55%] flex items-center justify-center p-[40px]">
        <img
          src={planImg}
          alt="Boy confidently preparing for school with three alarms set"
          className="max-h-[900px] rounded-lg object-contain"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
        />
      </div>
    </div>
  </SlideLayout>
);

export default Slide2Plan;
