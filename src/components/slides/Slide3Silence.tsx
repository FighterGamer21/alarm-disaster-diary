import SlideLayout from "../SlideLayout";

const Slide3Silence = () => (
  <SlideLayout>
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="font-display font-bold text-[4rem] tracking-[-0.04em] text-slide-accent mb-[80px]">
        07:00 AM
      </h1>
      <p className="font-body text-[1.375rem] leading-relaxed text-pretty max-w-[600px] text-left mb-[120px]">
        The betrayal wasn't a sound. It was the lack of one. I turned it off in a dream state. 
        Total silence for two hours.
      </p>
      <span className="font-body text-[1rem] text-muted-foreground tracking-[0.3em]">
        [ Silence ]
      </span>
    </div>
  </SlideLayout>
);

export default Slide3Silence;
