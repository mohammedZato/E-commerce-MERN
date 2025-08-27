import React, { createContext, useState } from "react";

export const EcommerceContext = createContext();

function GlobalState({ children }) {
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  return (
    <EcommerceContext.Provider
      value={{
        isDepartmentOpen,
        setIsDepartmentOpen,
        isServicesOpen,
        setIsServicesOpen,
        isMoreOpen,
        setIsMoreOpen,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
}

export default GlobalState;
