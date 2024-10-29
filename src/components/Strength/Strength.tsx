import { useEffect, useState } from "react";
import { useOptions } from "../Contexts/OptionsContext";
import Text from "../Text/Text";
import StrengthBar from "./StrengthBar";

const Strength = () => {
  const options = useOptions();
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    const calculateStrength = () => {
      let strength = 0;
      if (options.length >= 16) {
        strength += 1;
      }
      if (options.includeLowerCase) {
        strength += 1;
      }
      if (options.includeUpperCase) {
        strength += 1;
      }
      if (options.includeNumbers) {
        strength += 1;
      }
      if (options.includeSymbols) {
        strength += 1;
      }
      return strength;
    };
    setStrength(calculateStrength());
  }, [options]);

  const getStrengthLabel = () => {
    switch (strength) {
      case 3:
        return "WEAK";
      case 4:
        return "MEDIUM";
      case 5:
        return "STRONG";
      default:
        return "VERY WEAK";
    }
  };

  return (
    <div className="flex justify-between items-center px-4 bg-very-dark-grey h-16">
      <Text variant="body" className="text-grey text-[16px] md:hidden">
        STRENGTH
      </Text>
      <Text variant="body" className="text-grey hidden md:block">
        STRENGTH
      </Text>
      <div className="flex flex-row gap-4 items-center justify-center">
        <Text variant="body" className="text-almost-white md:hidden">
          {getStrengthLabel()}
        </Text>
        <Text variant="headingM" className="text-almost-white hidden md:block">
          {getStrengthLabel()}
        </Text>
        <StrengthBar strength={strength} />
      </div>
    </div>
  );
};

export default Strength;
