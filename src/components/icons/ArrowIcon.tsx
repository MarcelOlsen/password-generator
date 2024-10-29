import React from "react";

type ArrowIconProps = {
  className?: string;
};

const ArrowIcon: React.FC<ArrowIconProps> = ({ className }) => (
  <svg
    width="12"
    height="12"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fill="fill-current"
      d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
    />
  </svg>
);

export default ArrowIcon;
