import SlideLayout from "../SlideLayout";
import shoesImg from "@/assets/slide6-shoes.jpg";

const Slide6Walk = () => (
  <SlideLayout>
    <div className="flex h-full">
      {/* Left: Image */}
      <div className="w-[55%] h-full relative">
        <img
          src={shoesImg}
          alt="Top-down view of mismatched shoes - one black sneaker, one brown loafer"
          className="w-full h-full object-cover img-editorial"
        />
      </div>
      {/* Right: Vertical text */}
      <div className="w-[45%] flex flex-col justify-center px-[80px]">
        <h1 className="font-display font-bold text-[3.5rem] tracking-[-0.04em] text-balance leading-tight mb-[40px]">
          The Drumbeat
        </h1>
        <p className="font-body text-[1.375rem] leading-relaxed text-pretty max-w-[480px]">
          Running to school. Neighbors staring. My heart beating like a drum. 
          I thought they were impressed by my speed.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default Slide6Walk;
