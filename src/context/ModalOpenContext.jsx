import { useState, createContext } from "react";

export const ModalContext = createContext({
  isModalActive: false,
  handleModalOpen: () => {},
  handleModalClose: () => {},
});

export const ModalProviderContext = ({ children }) => {
  const [isModalActive, setModalActive] = useState(false);

  const handleModalOpen = () => setModalActive(!isModalActive);
  const handleModalClose = () => setModalActive(false);

  return (
    <ModalContext.Provider value={{ isModalActive, handleModalOpen, handleModalClose }}>
      {children}
    </ModalContext.Provider>
  );
};
