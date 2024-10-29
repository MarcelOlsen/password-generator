import React from "react";
import classNames from "classnames";

type StrengthBarProps = {
  strength: number;
};

const StrengthBar: React.FC<StrengthBarProps> = ({ strength }) => {
  const getStrengthClass = (index: number) => {
    //TODO: refactor super smelly code
    switch (index) {
      case 0:
        switch (strength) {
          case 3:
            return "bg-orange";
          case 4:
            return "bg-yellow";
          case 5:
            return "bg-neon-green";
          default:
            return "bg-red";
        }
      case 1:
        switch (strength) {
          case 3:
            return "bg-orange";
          case 4:
            return "bg-yellow";
          case 5:
            return "bg-neon-green";
          default:
            return "bg-very-dark-grey border border-almost-white border-2";
        }
      case 2:
        switch (strength) {
          case 4:
            return "bg-yellow";
          case 5:
            return "bg-neon-green";
          default:
            return "bg-very-dark-grey border border-almost-white border-2";
        }
      case 3:
        switch (strength) {
          case 5:
            return "bg-neon-green";
          default:
            return "bg-very-dark-grey border border-almost-white border-2";
        }
      default:
        return "bg-very-dark-grey border border-almost-white border-2";
    }
  };

  return (
    <div className="flex gap-1">
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          className={classNames(
            "w-2 h-6 md:w-3 md:h-8",
            getStrengthClass(index)
          )}
        />
      ))}
    </div>
  );
};

export default StrengthBar;
