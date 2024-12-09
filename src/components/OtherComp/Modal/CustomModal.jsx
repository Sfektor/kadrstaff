import { useContext } from "react";
import Modal from "react-modal";
import { Title, ButtonClose, StyledModal, SubTitle } from "./CustomModal.styled";
import { ModalContext } from "../../../context";

export const CustomModal = ({
  title,
  children,
  formSubmitModalOpen,
  subTitle,
  setSendingForm,
  setCheckCapture,
}) => {
  const { isModalActive, handleModalClose } = useContext(ModalContext);

  return (
    <>
      <Modal
        isOpen={isModalActive || formSubmitModalOpen}
        overlayClassName="modal-overlay"
        className="madal-content"
        onRequestClose={() => {
          handleModalClose();
          setSendingForm(false);
          setCheckCapture(false);
        }}
      >
        <ButtonClose
          onClick={() => {
            handleModalClose();
            setSendingForm(false);
            setCheckCapture(false);
          }}
        >
          X
        </ButtonClose>

        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>

        {children}
      </Modal>

      <StyledModal />
    </>
  );
};
