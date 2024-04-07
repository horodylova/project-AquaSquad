import Modal from 'react-modal';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const dateHandler = (currentDate = new Date()) => {
  const dateFormatter = new Intl.DateTimeFormat('uk-UA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const timeFormatter = new Intl.DateTimeFormat('uk-UA', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const time = timeFormatter.format(currentDate);
  const date = dateFormatter.format(currentDate);

  return {
    date,
    time,
  };
};

const AddWaterModal = ({ isOpen, onRequestClose }) => {
  Modal.setAppElement('#root');

  const [value, setValue] = useState(50);

  const handleValueChange = (e) => {
    const inputValue = e.target.value;
    // Validate input value to allow only numbers
    if (!isNaN(inputValue)) {
      setValue(inputValue);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onRequestClose();

    let date = dateHandler().date;
    let time = e.target.time.value;
    let value = Number(e.target.value.value);

    console.log(time, value);

    try {
      // await useDispatch(waterAction({ time, value, date })).unwrap();

      console.log(JSON.stringify({ time, value, date }));
      toast.success('Added your new entry!');
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Water Modal"
    >
      <h2>Add Water</h2>

      <form onSubmit={handleSubmit}>
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
          <input type="time" name="time" defaultValue={dateHandler().time} />
        </label>

        <label>
          <h3>Enter the value of the water used:</h3>
          <input
            type="text"
            name="value"
            value={value}
            onChange={handleValueChange}
          />
        </label>

        <div>
          <p>amount in ml</p>
          <button type="submit">Save</button>
        </div>
      </form>
    </Modal>
  );
};

export default AddWaterModal;
