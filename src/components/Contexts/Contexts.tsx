import { createContext, useState } from 'react';

interface LengthContextInterface {
  length: number;
  updateLength: (length: number) => void;
}

export const LengthContext = createContext<LengthContextInterface | undefined>(undefined);

interface LengthContextProviderProps {
  children: React.ReactNode;
}

const LengthContextProvider: React.FC<LengthContextProviderProps> = ({children}) => {
  const [length, setLength] = useState<number>(0);
  
  const updateLength = (length: number) => {
    setLength(length);
  }

  return (
    <LengthContext.Provider value={{ length, updateLength }}>
      {children}
    </LengthContext.Provider>
  );
};

export default LengthContextProvider;