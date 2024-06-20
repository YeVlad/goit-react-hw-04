import Modal from "react-modal";

export default function ImageModal({ modalIsOpen, closeModal, modalPic }) {
  Modal.setAppElement("#root");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img className="modalWind" src={modalPic} alt="big-picture" />
    </Modal>
  );
}
