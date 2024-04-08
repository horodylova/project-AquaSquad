import Container from '../../components/Container/Container';

import { TodayList } from '../../components/HomePage/TodayList/TodayList';

import { useState } from 'react';
import Modal from 'react-modal';
import EditModal from '../../components/AllModals/EditModal/EditModal';

Modal.setAppElement('#root');

export const DeveloperTestPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditbutton = () => {
    setIsModalOpen(true);
  };

  return (
    <Container>
      <p>Your test</p>
      <TodayList />
      <button onClick={handleEditbutton}>
        Edit water
        <svg width="16" height="16">
          <use href="/src/Images/welcome-page/iconSprite.svg#icon-pencil"></use>
        </svg>
      </button>

      <EditModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </Container>
  );
};
