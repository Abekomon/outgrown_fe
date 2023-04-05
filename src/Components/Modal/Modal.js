import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ open, picture, description, button, updateModal }) => {
  const [ModalIsOpen, setModalIsOpen] = useState(false);

  const closeModalHandler = (event) => {
    if(event.target.className.includes('close-able')) {

      setTimeout(() => {
        updateModal(false)
      }, 400);
    }
  };

  const containerStyles = open ? "modal-container close-able" : "modal-container close-able closed";

  return (
    <div className={containerStyles} onClick={event => closeModalHandler(event)}>
      <div className="modal">
        <div className="x-button-container">
          <button className={'close-able'} onClick={event => closeModalHandler(event)}>X</button>
        </div>
        <div>
          <img className="modal-image" src={picture} />
          <div>
            <p>{description}</p>
          </div>
        </div>
        <div>
          <button>Confirm Purchase</button>
          <button className={'close-able'} onClick={event => closeModalHandler(event)}>Cancel</button>
        </div>
        {/* close modal button w/ hover state*/}
        {/* modal content with picture, description ect*/}
        {/* button to confirm purchase or putting up on marketplace */}
        {/* button to cancel and quit out of modal */}
      </div>
    </div>
  );
};

export default Modal;
