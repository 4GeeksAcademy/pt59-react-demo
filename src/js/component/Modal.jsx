import React from "react";

const ModalButton = ({ modalId, onClick, children }) => {
  return <button
    type="button"
    className="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target={`#${modalId}`}
    onClick={onClick}
  >
    {children}
  </button>
}

const ModalContent = ({ recipe }) => {
  return <div className="modal-content">
    <div className="modal-header">
      <a href={recipe?.sourceUrl} target="_blank">
        <h5 className="modal-title">
          {recipe?.title}
        </h5>
      </a>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
      <img src={recipe?.image} className="rounded w-100 mb-3" />
      <p dangerouslySetInnerHTML={{ __html: recipe?.summary }}></p>
    </div>
    <div className="modal-footer">
      <small>Ready in {recipe?.readyInMinutes} minutes.</small>
    </div>
  </div>
}

const Modal = ({ modalId, recipe, isLoaded = false }) => {
  return <div id={modalId} className="modal" tabIndex="-1">
    <div className="modal-dialog">
      {isLoaded ? <ModalContent recipe={recipe} /> : ""}
    </div>
  </div>
}

export { Modal, ModalButton }
