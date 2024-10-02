import React, { createContext, useState } from "react";

interface LoaderContextType {
    isLoading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoaderContext = createContext<LoaderContextType | null>(null);

export const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const [isLoading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{isLoading, setLoading}}>
      {children}
    </LoaderContext.Provider>
  );
};

