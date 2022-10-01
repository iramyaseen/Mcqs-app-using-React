import React from "react";

const Modal = ({ onClose, results, data }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Your answers</p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <section className="modal-card-body content">
          <ul>
            <li>
              <p>{ data}</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Modal;
