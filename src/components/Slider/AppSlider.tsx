import * as Slider from "@radix-ui/react-slider";
import { useOptions } from "../Contexts/OptionsContext";

type AppSliderProps = {
  defaultValue: number;
  max: number;
  step: number;
};

const AppSlider: React.FC<AppSliderProps> = ({ defaultValue, max, step }) => {
  const { setLength } = useOptions();

  const handleChange = (value: number[]) => {
    setLength(value[0]);
  };

  return (
    <form>
      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        defaultValue={[defaultValue]}
        max={max}
        step={step}
        onValueChange={(value) => handleChange(value)}
      >
        <Slider.Track className="bg-very-dark-grey relative grow h-[5px]">
          <Slider.Range className="absolute bg-neon-green  h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-5 h-5 bg-almost-white rounded-[10px] outline-2 -outline-offset-1 hover:bg-very-dark-grey hover:outline-neon-green hover:outline outline-none"
          aria-label="Volume"
        />
      </Slider.Root>
    </form>
  );
};

export default AppSlider;
