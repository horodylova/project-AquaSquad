import Modal from 'react-modal';
import EditModalstyles from './EditModal.styled';
// import { useSelector } from 'redux';
import { useState } from 'react';
import { ReactComponent as DrinkIcon } from '../../../Icons/drink.svg';
import { ReactComponent as CloseIcon } from '../../../Icons/close.svg';
import { ReactComponent as MinusIcon } from '../../../Icons/minus.svg';
import { ReactComponent as PlusIcon } from '../../../Icons/plus.svg';
import { toast } from 'react-toastify';

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

const EditModal = ({ isOpen, onRequestClose, waterId }) => {
  console.log(waterId);

  const valueTime = '03:40';
  const valueMl = '220';

  const [ml, setMl] = useState(valueMl);
  const [time, setTime] = useState(valueTime);

  // const value = useSelector((state) => state.someSlice.someValue);

  // вивід часу у форматі AM/PM
  const formatTime = (time) => {
    let [hours, minutes] = time.split(':');
    let period = hours >= 12 ? 'PM' : 'AM';
    hours = hours >= 13 ? hours - 12 : hours;
    return `${hours}:${minutes} ${period}`;
}
  

  const handleInput = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'time':
         if (/^([01][0-9]|2[0-3]):[0-5][0-9]$/.test(value)) {
           setTime(value);
         }
        break;
      case 'ml':
        if (!isNaN(value) && value > 0 && value<10000) {
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

    // let date = dateHandler().date;
    let time = e.target.time.value;
    let value = Number(e.target.value.value);

    console.log(time, value);

    try {
      // await useDispatch(waterAction({ time, value, date })).unwrap();

      // console.log(JSON.stringify({ time, value, date }));
      toast.success('Added your new entry!');
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Modal
      onRequestClose={onRequestClose}
      isOpen={isOpen}
      style={modalStyle}
      contentLabel="EditWater Modal"
    >
      <form onSubmit={handleSubmit}>
        <EditModalstyles.Container>
          <EditModalstyles.TitleContainer>
            <p>Edit the entered amount of water</p>
            <button onClick={onRequestClose}>
              <CloseIcon width="24" height="24" />
            </button>
          </EditModalstyles.TitleContainer>
          <EditModalstyles.WaterPortionWrapper>
            <DrinkIcon width="36" height="36" />
            <p className="ml">{ml}ml</p>
            <p className="time">{formatTime(time)}</p>
          </EditModalstyles.WaterPortionWrapper>
          <EditModalstyles.EnteredData>
            <p className="title">Correct entered data:</p>
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
          </EditModalstyles.EnteredData>
          <EditModalstyles.Label>
            Recording time:
            <EditModalstyles.Input
              type="text"
              name="time"
              pattern="([01][0-9]|2[0-3]):[0-5][0-9]"
              value={time}
              onChange={handleInput}
            />
          </EditModalstyles.Label>
          <EditModalstyles.Label isLarge>
            Enter the value of the water used:
            <EditModalstyles.Input
              type="number"
              name="ml"
              value={ml}
              min="1"
              minLength="1"
              maxLength="4"
              onChange={handleInput}
            />
          </EditModalstyles.Label>
          <EditModalstyles.SaveButtonWrapper>
            <p>{ml}ml</p>
            <button type="button">Save</button>
          </EditModalstyles.SaveButtonWrapper>
        </EditModalstyles.Container>
      </form>
    </Modal>
  );
};

export default EditModal;
