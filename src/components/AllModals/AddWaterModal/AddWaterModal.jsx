import Modal from 'react-modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { addWater } from '../../../redux/water/waterOperations';

import { ReactComponent as DrinkIcon } from '../../../Icons/drink.svg';
import { ReactComponent as CloseIcon } from '../../../Icons/close.svg';
import { ReactComponent as MinusIcon } from '../../../Icons/minus.svg';
import { ReactComponent as PlusIcon } from '../../../Icons/plus.svg';

import dateHandler from '../../helpers/dateHandler';
import AddWaterModalStyles from './AddWaterModal.styled';

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    padding: '0',
    position: 'initial',
    width: '100%',
  },
};

const AddWaterModal = ({ isOpen, onRequestClose }) => {
  Modal.setAppElement('#root');

  const dispatch = useDispatch();

  const [ml, setMl] = useState(50);
  const [time, setTime] = useState(dateHandler().time);

  // const handleValueChange = (e) => {
  //   const inputValue = e.target.value;
  //   // Validate input value to allow only numbers
  //   if (!isNaN(inputValue)) {
  //     setValue(inputValue);
  //   }
  // };

  const handleInput = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'time':
        // if (/^([01][0-9]|2[0-3]):[0-5][0-9]$/.test(value)) {
        // }
        setTime(value);
        break;
      case 'ml':
        if (!isNaN(value) && value > 0 && value < 10000) {
          setMl(value);
        }
        break;
      default:
        console.log('ERROR');
    }
  };

  const handleMinusClick = () => {
    if (ml >= 100) {
      setMl(Number(ml) - 50);
    }
    if (ml < 100) {
      setMl(50);
    }
  };

  const handlePlusClick = () => {
    setMl(Number(ml) + 50);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onRequestClose();

    let data = {
      date: dateHandler().date,
      time: e.target.time.value,
      value: Number(e.target.ml.value),
    };

    // console.log(time, value);
    console.log(JSON.stringify(data));

    try {
      await dispatch(addWater(data)).unwrap();

      toast.success('Added your new entry!');
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={modalStyle}
      contentLabel="Add Water Modal"
    >
      <form onSubmit={handleSubmit}>
        <AddWaterModalStyles.Container>
          <AddWaterModalStyles.TitleContainer>
            <p>Add Water</p>
            <button onClick={onRequestClose}>
              <CloseIcon width="24" height="24" />
            </button>
          </AddWaterModalStyles.TitleContainer>

          <AddWaterModalStyles.EnteredData>
            <p className="title">Choose a value:</p>
            <p className="subtitle">Amount of water:</p>
            <div className="waterControllers">
              <button
                type="button"
                onClick={handleMinusClick}
                disabled={ml <= 50}
              >
                <MinusIcon width="24" height="24" />
              </button>
              <div className="ml">{ml} ml</div>
              <button
                type="button"
                onClick={handlePlusClick}
                disabled={ml >= 9950}
              >
                <PlusIcon width="24" height="24" />
              </button>
            </div>
          </AddWaterModalStyles.EnteredData>

          <AddWaterModalStyles.Label>
            Recording time:
            <AddWaterModalStyles.Input
              type="time"
              name="time"
              // pattern="([01][0-9]|2[0-3]):[0-5][0-9]"
              value={time}
              onChange={handleInput}
            />
          </AddWaterModalStyles.Label>

          <AddWaterModalStyles.Label>
            Enter the value of the water used:
            <AddWaterModalStyles.Input
              type="number"
              name="ml"
              value={ml}
              min="1"
              minLength="1"
              maxLength="4"
              onChange={handleInput}
            />
          </AddWaterModalStyles.Label>

          <AddWaterModalStyles.SaveButtonWrapper>
            <p>{ml}ml</p>
            <button type="submit">Save</button>
          </AddWaterModalStyles.SaveButtonWrapper>
        </AddWaterModalStyles.Container>
      </form>
    </Modal>
  );
};

export default AddWaterModal;
