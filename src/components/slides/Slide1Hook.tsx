import SlideLayout from "../SlideLayout";
import clockImg from "@/assets/slide1-clock.png";

const Slide1Hook = () => (
  <SlideLayout>
    <div className="flex flex-col items-center justify-center h-full pb-[64px] px-[160px]">
      <img
        src={clockImg}
        alt="Boy sleeping peacefully while alarm clock shows 07:00 OFF"
        className="w-[600px] rounded-lg mb-[48px]"
        style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}
      />
      <h1 className="font-display font-bold text-[4rem] tracking-[-0.04em] text-balance text-center leading-tight mb-[24px]">
        The Day My Alarm Clock Betrayed Me
      </h1>
      <p className="font-body text-[1.5rem] text-muted-foreground text-center">
        A chaotic morning in three acts.
      </p>
    </div>
  </SlideLayout>
);

export default Slide1Hook;
