"use client";

import React, { createContext, useState } from "react";

interface DrawerContextType {
  drawer: boolean;
  setDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DrawerProvider = createContext<DrawerContextType>({
  drawer: false,
  setDrawer: () => {},
});

const DrawerContext = ({ children }: { children: React.ReactNode }) => {
  const [drawer, setDrawer] = useState(false);
  const drawerState = {
    drawer,
    setDrawer,
  };

  return (
    <DrawerProvider.Provider value={drawerState}>
      {children}
    </DrawerProvider.Provider>
  );
};

export default DrawerContext;
