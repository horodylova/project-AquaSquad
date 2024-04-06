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
      <h2>Add Water</h2>

      <form action="submit">
        <h3>Choose a value</h3>
        <div>
          <p>Amount of water</p>

          <div>
            <button>-</button>
            <p>amount in ml</p>
            <button>+</button>
          </div>
        </div>

        <label>
          <p>Recording time:</p>
          <input type="time" />
        </label>

        <label>
          <h3>Enter the value of the water used:</h3>
          <input type="text" />
        </label>

        <div>
          <p>amount in ml</p>
          <button onClick={onRequestClose}>Save</button>
        </div>
      </form>
    </Modal>
  );
};

export default AddWaterModal;
