import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}

const SlideLayout = ({ children, dark = false, className = "" }: SlideLayoutProps) => {
  return (
    <div
      className={`w-[1920px] h-[1080px] relative overflow-hidden ${
        dark ? "bg-slide-dark text-slide-dark-fg" : "bg-slide-bg text-slide-fg"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default SlideLayout;
