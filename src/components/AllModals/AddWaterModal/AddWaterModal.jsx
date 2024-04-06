import React from 'react';
import Modal from 'react-modal';

const AddWaterModal = ({ isOpen, onRequestClose }) => {
  Modal.setAppElement('#root');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Water Modal"
    >
      <h2>Add Water Modal</h2>
      <p>Modal content goes here...</p>
      <button onClick={onRequestClose}>Close Modal</button>
    </Modal>
  );
};

export default AddWaterModal;
