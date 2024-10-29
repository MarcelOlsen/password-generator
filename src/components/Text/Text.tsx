import React from "react";
import classNames from "classnames";

interface TextProps {
  variant: "body" | "headingM" | "headingL";
  className?: string;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ variant, className, children }) => {
  const classes = classNames(
    {
      "text-body leading-body": variant === "body",
      "text-headingM leading-headingM": variant === "headingM",
      "text-headingL leading-headingL": variant === "headingL",
    },
    className
  );

  return <p className={classes}>{children}</p>;
};

export default Text;
