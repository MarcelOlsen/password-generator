import { cloneElement } from "react";

type AppButtonProps = {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  handlePress?: () => void;
};

const AppButton: React.FC<AppButtonProps> = ({
  children,
  className,
  icon,
  handlePress,
}) => {
  return (
    <button className={className} onClick={handlePress}>
      {children}
      {icon &&
        cloneElement(icon as React.ReactElement, {
          className: "fill-current",
        })}
    </button>
  );
};

export default AppButton;
