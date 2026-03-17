import SlideLayout from "../SlideLayout";

const Slide5Frenzy = () => (
  <SlideLayout>
    <div className="relative h-full w-full overflow-hidden">
      {/* Abstract chaotic shapes */}
      <div className="absolute top-[80px] right-[200px] w-[300px] h-[300px] rounded-full border-2 border-slide-muted opacity-40" />
      <div className="absolute top-[200px] right-[100px] w-[180px] h-[180px] bg-slide-muted/30 rounded-lg rotate-12" />
      <div className="absolute bottom-[150px] right-[300px] w-[240px] h-[240px] rounded-full bg-slide-accent/10" />
      <div className="absolute top-[400px] right-[50px] w-[120px] h-[120px] border-2 border-slide-accent/20 rotate-45" />
      <div className="absolute bottom-[80px] right-[150px] w-[160px] h-[160px] rounded-full border border-slide-muted opacity-30" />

      {/* Text pushed to margins */}
      <div className="absolute top-[120px] left-[120px] max-w-[700px]">
        <h1 className="font-display font-bold text-[3.5rem] tracking-[-0.04em] text-balance leading-tight mb-[60px]">
          The Blur
        </h1>
        <div className="space-y-[40px]">
          <div className="flex items-baseline gap-[20px]">
            <span className="font-display font-bold text-[1.5rem] text-slide-accent">Shirt</span>
            <span className="font-body text-[1.375rem]">Inside out.</span>
          </div>
          <div className="flex items-baseline gap-[20px]">
            <span className="font-display font-bold text-[1.5rem] text-slide-accent">Teeth</span>
            <span className="font-body text-[1.375rem]">Almost brushed with face wash.</span>
          </div>
          <div className="flex items-baseline gap-[20px]">
            <span className="font-display font-bold text-[1.5rem] text-slide-accent">Notes</span>
            <span className="font-body text-[1.375rem]">Left on the kitchen counter.</span>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide5Frenzy;
