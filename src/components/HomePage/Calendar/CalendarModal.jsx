import Modal from 'react-modal';


import {
  ModalContent,
  SelectedDayInfo,
  DailyNormaLabel,
  DailyNormaValue,
  FulfillmentLabel,
  FulfillmentValue,
  WaterConsumedLabel,
  WaterConsumedValue,
  Paragraph
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
      maxWidth:'260px',
      borderRadius: '10px',
      background: 'var(--white-color)',
      boxShadow: '0px 4px 4px 0px rgba(64, 123, 255, 0.30)',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Day Details"
      style={ModalStyle}
    >
        <ModalContent>
          <SelectedDayInfo>
            {selectedDay
              ? `${selectedDay}, ${currentDate.toLocaleString('en', {
                  month: 'long',
                })}`
              : ''}
          </SelectedDayInfo>{' '}
          <Paragraph>
            <DailyNormaLabel>Daily norma: </DailyNormaLabel>
            <DailyNormaValue>{dailyNorma || '1.5'} L</DailyNormaValue>
          </Paragraph>{' '}
          <Paragraph>
            <FulfillmentLabel>Fulfillment of the daily norm:</FulfillmentLabel>{' '}
            <FulfillmentValue>{fulfillmentPercentage || '0'}%</FulfillmentValue>
          </Paragraph>
          <Paragraph>
            <WaterConsumedLabel>Water consumed:</WaterConsumedLabel>{' '}
            <WaterConsumedValue>{waterConsumed || '0'}</WaterConsumedValue>
          </Paragraph>
        </ModalContent>
    </Modal>
  );
};

export default CalendarModal;
