import SlideLayout from "../SlideLayout";

const AlarmCard = ({ time, label }: { time: string; label: string }) => (
  <div
    className="w-[220px] h-[140px] rounded-lg flex flex-col items-center justify-center"
    style={{ boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05)" }}
  >
    <span className="font-display font-bold text-[2rem] tracking-tight">{time}</span>
    <span className="font-body text-[0.875rem] text-muted-foreground mt-1">{label}</span>
    <div className="mt-3 w-[40px] h-[20px] bg-green-500 rounded-full relative">
      <div className="absolute right-[2px] top-[2px] w-[16px] h-[16px] rounded-full bg-background" />
    </div>
  </div>
);

const Slide2Plan = () => (
  <SlideLayout>
    <div className="flex h-full">
      {/* Left: Text */}
      <div className="w-1/2 flex flex-col justify-center pl-[160px] pr-[80px]">
        <h1 className="font-display font-bold text-[3.5rem] tracking-[-0.04em] text-balance leading-tight mb-[40px]">
          The Perfect Plan
        </h1>
        <p className="font-body text-[1.375rem] leading-relaxed text-pretty max-w-[520px]">
          The night before, I was a genius. Bag packed. Clothes laid out. Three alarms set. 
          I went to bed confident that tomorrow would be smooth and stress-free.
        </p>
      </div>
      {/* Right: Visual */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="flex gap-[32px]">
          <AlarmCard time="06:30" label="Alarm 1" />
          <AlarmCard time="06:45" label="Alarm 2" />
          <AlarmCard time="07:00" label="Alarm 3" />
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide2Plan;
