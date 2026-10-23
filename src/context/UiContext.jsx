import { createContext, useContext, useState } from "react";

const UiContext = createContext(null);

export function UiProvider({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <UiContext.Provider
      value={{
        drawerOpen,
        openDrawer: () => setDrawerOpen(true),
        closeDrawer: () => setDrawerOpen(false),
      }}
    >
      {children}
    </UiContext.Provider>
  );
}

export function useUi() {
  return useContext(UiContext);
}
