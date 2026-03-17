import SlideLayout from "../SlideLayout";
import frenzyImg from "@/assets/slide5-frenzy.png";

const Slide5Frenzy = () => (
  <SlideLayout>
    <div className="flex h-full">
      {/* Left: Cartoon */}
      <div className="w-[55%] flex items-center justify-center p-[40px]">
        <img
          src={frenzyImg}
          alt="Boy in frantic rush with shirt inside out, face wash, mismatched shoes"
          className="max-h-[950px] rounded-lg object-contain"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
        />
      </div>
      {/* Right: Text */}
      <div className="w-[45%] flex flex-col justify-center pr-[160px] pl-[40px]">
        <h1 className="font-display font-bold text-[3.5rem] tracking-[-0.04em] text-balance leading-tight mb-[48px]">
          The Blur
        </h1>
        <div className="space-y-[32px]">
          <div>
            <span className="font-display font-bold text-[1.5rem] text-slide-accent">Shirt</span>
            <p className="font-body text-[1.25rem] mt-1">Inside out.</p>
          </div>
          <div>
            <span className="font-display font-bold text-[1.5rem] text-slide-accent">Teeth</span>
            <p className="font-body text-[1.25rem] mt-1">Almost brushed with face wash.</p>
          </div>
          <div>
            <span className="font-display font-bold text-[1.5rem] text-slide-accent">Notes</span>
            <p className="font-body text-[1.25rem] mt-1">Left on the kitchen counter.</p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide5Frenzy;
