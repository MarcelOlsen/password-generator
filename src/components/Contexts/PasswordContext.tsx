import { createContext, useContext, useState, ReactNode } from "react";
import { useOptions } from "./OptionsContext";

interface PasswordContextType {
  password: string;
  generatePassword: () => void;
}

const PasswordContext = createContext<PasswordContextType | undefined>(
  undefined
);

export const PasswordProvider = ({ children }: { children: ReactNode }) => {
  const [password, setPassword] = useState<string>("");
  const options = useOptions();

  if (!options) {
    throw new Error("PasswordProvider must be used within an OptionsProvider");
  }

  const generatePassword = () => {
    const {
      length,
      includeNumbers,
      includeSymbols,
      includeUpperCase,
      includeLowerCase,
    } = options;

    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let allChars = "";
    if (includeLowerCase) allChars += lowerCaseChars;
    if (includeUpperCase) allChars += upperCaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;

    if (allChars === "") {
      return;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      newPassword += allChars[randomIndex];
    }

    setPassword(newPassword);
  };

  return (
    <PasswordContext.Provider value={{ password, generatePassword }}>
      {children}
    </PasswordContext.Provider>
  );
};

export const usePassword = (): PasswordContextType => {
  const context = useContext(PasswordContext);
  if (context === undefined) {
    throw new Error("usePassword must be used within a PasswordProvider");
  }
  return context;
};
