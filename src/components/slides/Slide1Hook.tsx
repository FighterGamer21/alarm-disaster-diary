import SlideLayout from "../SlideLayout";
import clockImg from "@/assets/slide1-clock.png";

const Slide1Hook = () => (
  <SlideLayout>
    <div className="flex flex-col items-center justify-center h-full pb-[128px] px-[200px]">
      <img
        src={clockImg}
        alt="Digital alarm clock showing 07:00 with alarm off"
        className="w-[320px] mb-[80px] img-editorial"
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
