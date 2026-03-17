import SlideLayout from "../SlideLayout";
import deskImg from "@/assets/slide4-desk.jpg";

const Slide4Realization = () => (
  <SlideLayout>
    <div className="relative w-full h-full">
      <img
        src={deskImg}
        alt="Messy desk with scattered papers, focused on a single pen"
        className="absolute inset-0 w-full h-full object-cover img-editorial"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      <div className="absolute bottom-[120px] left-[160px]">
        <div
          className="bg-background rounded-[20px] p-[48px] max-w-[640px]"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
        >
          <h1 className="font-display font-bold text-[5rem] tracking-[-0.04em] leading-none mb-[24px]">
            09:00 AM
          </h1>
          <p className="font-body text-[1.375rem] leading-relaxed text-pretty">
            Panic isn't a word; it's a heart rate. Two hours late. Notes half-packed. 
            A whirlwind of bad decisions.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide4Realization;
