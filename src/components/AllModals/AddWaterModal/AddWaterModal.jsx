import { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const AddWaterModal = ({ props }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default AddWaterModal;
