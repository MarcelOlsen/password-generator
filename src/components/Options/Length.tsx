import AppSlider from "../Slider/AppSlider";
import Text from "../Text/Text";
import { useOptions } from "../Contexts/OptionsContext";

const Length = () => {
  const { length } = useOptions();

  return (
    <div className="flex flex-col text-almost-white gap-2 md:gap-4w">
      <div className="flex justify-between items-center">
        <>
          <Text variant="headingM" className="hidden md:block">
            Character Length
          </Text>
          <Text variant="body" className="text-[16px] md:hidden">
            Character Length
          </Text>
        </>
        <>
          <Text variant="headingM" className="text-neon-green md:hidden">
            {length}
          </Text>
          <Text variant="headingL" className="text-neon-green hidden md:block">
            {length}
          </Text>
        </>
      </div>
      <AppSlider defaultValue={32} max={256} step={1} />
    </div>
  );
};

export default Length;
