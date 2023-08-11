// Reusable functional React Component
// Renders a modal with different content based on the showModal and showModal2 props.
// Utilizes the `handleModalInteraction` prop to handle click events when the modal is displayed.

import React from "react";

const ModalC1 = ({ showModal, showModal2, handleModalInteraction }) => { // take three props as inputs
  if (showModal) {
    return (
      <div
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-50 bg-black"
        onClick={handleModalInteraction}
      >
        <img
          src="./initialModal.gif"
          alt=""
          className="w-2.5/5 h-2/5 transition-opacity duration-500 pointer-events-none"
        />
      </div>
    );
  } else if (showModal2) {
    return (
      <div
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-50 bg-black"
        onClick={handleModalInteraction}
      >
        <img
          src="./nextModal.png"
          alt=""
          className="w-3/5 h-2.5/5 transition-opacity duration-500 pointer-events-none"
        />
      </div>
    );
  } else {
    return null;
  }
};

export default ModalC1;
