import { useState, createContext } from "react";

export const MenuContext = createContext({
  isMenuOpen: true,
  toggleMenuMode: () => {},
});

export const MenuProviderContext = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuMode = () => setIsMenuOpen(!isMenuOpen);

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>
      {children}
    </MenuContext.Provider>
  );
};
