import React from 'react';
import './Modal.scss';

const Modal = ({ pokemon, hideModal }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassname}>
      <section className="modal-main">
        <img className="logo" src={require("../../assets/images/logo.png")}/>
        <button onClick={hideModal()}>close</button>
      </section>
    </div>
  );
};

export default Modal;