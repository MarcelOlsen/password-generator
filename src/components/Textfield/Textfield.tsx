import { useState } from "react";
import CopyIcon from "../icons/CopyIcon";
import Text from "../Text/Text";
import classNames from "classnames";

type TextfieldProps = {
  password: string;
  placeholder?: string;
};

const Textfield: React.FC<TextfieldProps> = ({ password, placeholder }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-16 justify-between items-center flex bg-dark-grey px-4 md:px-8 text-almost-white md:h-[80px]">
      <div className="w-3/5">
        {password.length > 0 && (
          <>
            <Text variant="headingM" className="md:hidden truncate">
              {password}
            </Text>
            <Text variant="headingL" className="hidden md:block truncate">
              {password}
            </Text>
          </>
        )}
        {password.length === 0 && (
          <>
            <Text variant="headingM" className="md:hidden truncate opacity-25">
              {placeholder}
            </Text>
            <Text
              variant="headingL"
              className="hidden md:block truncate opacity-25"
            >
              {placeholder}
            </Text>
          </>
        )}
      </div>
      <div
        onClick={copyToClipboard}
        className="text-neon-green flex items-center justify-center gap-4"
      >
        <Text
          variant="body"
          className={classNames({
            "opacity-0": !copied,
            "opacity-100": copied,
          })}
        >
          COPIED
        </Text>
        <CopyIcon className="flex-shrink-0 w-5 h-6 md:w-7 md:h-8 text-neon-green hover:text-almost-white hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default Textfield;
