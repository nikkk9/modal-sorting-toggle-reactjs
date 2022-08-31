import React from "react";
import classes from "./open-modal.module.css";

const OpenModal = (props) => {
  return (
    <div className={classes.openModal}>
      <div className={classes.openModalContainer}>
        <div className={classes.btnContainer}>
          <button
            className={classes.closeBtn}
            onClick={() => props.closeModal(false)}
          >
            X
          </button>
        </div>
        <h1>Congratulation !</h1>
      </div>
    </div>
  );
};

export default OpenModal;
