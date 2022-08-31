import React, { useState } from "react";
import classes from "./modal.module.css";
import OpenModal from "./OpenModal";

const Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  const modalHandle = () => {
    setOpenModal(true);
  };
  return (
    <div className={classes.modal}>
      <div className={classes.modalContainer}>
        <h1>Hey, click on the button to open the modal</h1>
        <button className={classes.openBtn} onClick={modalHandle}>
          OPEN MODAL
        </button>
        {openModal && <OpenModal closeModal={setOpenModal} />}
      </div>
    </div>
  );
};

export default Modal;
