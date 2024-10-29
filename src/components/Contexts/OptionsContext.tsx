import { createContext, useContext, useState, ReactNode } from "react";

interface OptionsContextType {
  length: number;
  includeNumbers: boolean;
  includeSymbols: boolean;
  includeUpperCase: boolean;
  includeLowerCase: boolean;
  setLength: (length: number) => void;
  setIncludeNumbers: (include: boolean) => void;
  setIncludeSymbols: (include: boolean) => void;
  setIncludeUpperCase: (include: boolean) => void;
  setIncludeLowerCase: (include: boolean) => void;
}

const OptionsContext = createContext<OptionsContextType | undefined>(undefined);

export const OptionsProvider = ({ children }: { children: ReactNode }) => {
  const [length, setLength] = useState<number>(12);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [includeUpperCase, setIncludeUpperCase] = useState<boolean>(true);
  const [includeLowerCase, setIncludeLowerCase] = useState<boolean>(true);

  return (
    <OptionsContext.Provider
      value={{
        length,
        includeNumbers,
        includeSymbols,
        includeUpperCase,
        includeLowerCase,
        setLength,
        setIncludeNumbers,
        setIncludeSymbols,
        setIncludeUpperCase,
        setIncludeLowerCase,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};

export const useOptions = (): OptionsContextType => {
  const context = useContext(OptionsContext);
  if (context === undefined) {
    throw new Error("useOptions must be used within an OptionsProvider");
  }
  return context;
};
