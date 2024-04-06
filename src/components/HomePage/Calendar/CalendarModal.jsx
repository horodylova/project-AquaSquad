import Modal from 'react-modal';
import {
  ModalWrapper,
  ModalContent,
  SelectedDayInfo,
  DailyNormaLabel,
  DailyNormaValue,
  FulfillmentLabel,
  FulfillmentValue,
} from './ModalStyles';

export const CalendarModal = ({
  isOpen,
  onRequestClose,
  currentDate,
  selectedDay,
  dailyNorma,
  fulfillmentPercentage,
  waterConsumed,
}) => {
  const ModalStyle = {
    overlay: {
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      padding: '0',
      position: 'initial',
      width: '100%'
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose} 
      contentLabel="Day Details"
      style={ModalStyle}
    >
      <ModalWrapper>
        <ModalContent>
          <SelectedDayInfo>
            {selectedDay
              ? `${selectedDay}, ${currentDate.toLocaleString('en', {
                  month: 'long',
                })}`
              : ''}
          </SelectedDayInfo>{' '}
          <p>
            <DailyNormaLabel>Daily norma: </DailyNormaLabel>
            <DailyNormaValue>{dailyNorma || '1.5'} L</DailyNormaValue>
          </p>{' '}
          <p>
            <FulfillmentLabel>Fulfillment of the daily norm:</FulfillmentLabel>{' '}
            <FulfillmentValue>{fulfillmentPercentage || '0'}%</FulfillmentValue>
          </p>
          <p>Water consumed: {waterConsumed || '0'}</p>
        </ModalContent>
      </ModalWrapper>
    </Modal>
  );
};

export default CalendarModal;
