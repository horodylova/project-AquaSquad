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
  Paragraph,
} from './ModalStyles';

export const CalendarModal = ({
  isOpen,
  onRequestClose,
  currentDate,
  selectedDay,
  dailyNorma,
  fulfillmentPercentage,
  waterConsumed,
  obj,
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
      maxWidth: '260px',
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
          <DailyNormaValue>{obj.dayWaterRate} L</DailyNormaValue>
        </Paragraph>{' '}
        <Paragraph>
          <FulfillmentLabel>Fulfillment of the daily norm:</FulfillmentLabel>{' '}
          <FulfillmentValue>{obj.percent}%</FulfillmentValue>
        </Paragraph>
        <Paragraph>
          <WaterConsumedLabel>Water consumed:</WaterConsumedLabel>{' '}
          <WaterConsumedValue>{obj.count}</WaterConsumedValue>
        </Paragraph>
      </ModalContent>
    </Modal>
  );
};

export default CalendarModal;
