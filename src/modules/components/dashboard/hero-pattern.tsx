import { WavyBackground } from "@/components/ui/wavy-background";
import { cn } from "@/lib/utils";

const HeroPattern = () => {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block mt-2">
      <WavyBackground
        colors={["#c4b4ff", "#7f22fe", "#2DDBBF", "#38BDF8"]}
        backgroundFill={cn("rgba(255,255,255,0)")}
        blur={3}
        speed="slow"
        waveOpacity={0.1}
        waveWidth={60}
        waveYOffset={250}
        containerClassName="h-full"
        className="hidden"
      />
    </div>
  );
};

export default HeroPattern;
