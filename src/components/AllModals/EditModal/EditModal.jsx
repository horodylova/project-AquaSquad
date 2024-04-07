import Modal from 'react-modal';
import EditModalstyles from './EditModal.styled';
import { ReactComponent as DrinkIcon } from '../../../Icons/drink.svg';
import { ReactComponent as CloseIcon } from '../../../Icons/close.svg';
import { ReactComponent as MinusIcon } from '../../../Icons/minus.svg';
import { ReactComponent as PlusIcon } from '../../../Icons/plus.svg';

  const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    content: {
      padding: '0',
      position: 'initial',
      width: '100%',
    },
  };


const EditModal = ({ isOpen, onRequestClose }) => {


  return (
    <Modal
      onRequestClose={onRequestClose}
      isOpen={isOpen}
      style={modalStyle}
      contentLabel="EditWater Modal"
    >
      <EditModalstyles.Container>
        <EditModalstyles.TitleContainer>
          <p>Edit the entered amount of water</p>
          <button onClick={onRequestClose}>
            <CloseIcon width="24" height="24" />
          </button>
        </EditModalstyles.TitleContainer>
        <EditModalstyles.WaterPortionWrapper>
          <DrinkIcon width="36" height="36" />
          <p className="ml">250ml</p>
          <p className="time">07:00 AM</p>
        </EditModalstyles.WaterPortionWrapper>
        <EditModalstyles.EnteredData>
          <p className="title">Correct entered data:</p>
          <p className="subtitle">Amount of water:</p>
          <div className="waterControllers">
            <button type="button">
              <MinusIcon width="24" height="24" />
            </button>
            <div className="ml">250 ml</div>
            <button type="button">
              <PlusIcon width="24" height="24" />
            </button>
          </div>
        </EditModalstyles.EnteredData>
        <EditModalstyles.Label>
          Recording time:
          <EditModalstyles.Input type="text" />
        </EditModalstyles.Label>
        <EditModalstyles.Label isLarge>
          Enter the value of the water used:
          <EditModalstyles.Input type="text" />
        </EditModalstyles.Label>
        <EditModalstyles.SaveButtonWrapper>
          <p>250ml</p>
          <button type="button">Save</button>
        </EditModalstyles.SaveButtonWrapper>
      </EditModalstyles.Container>
    </Modal>
  );
};

export default EditModal;
