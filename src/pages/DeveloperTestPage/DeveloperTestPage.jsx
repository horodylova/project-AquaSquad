import { TodayList } from '../../components/HomePage/TodayList/TodayList';
import { useState } from 'react';
import Modal from 'react-modal';
import EditModal from '../../components/AllModals/EditModal/EditModal';

Modal.setAppElement('#root');

export const DeveloperTestPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [waterId, setWaterId] = useState(0);

  const testId = '333';
  const handleEditbutton = (id) => {
    setWaterId(id);
    setIsModalOpen(true);
  };

  return (
    <>
      <p>Your test</p>
      <TodayList />
      <button onClick={() => handleEditbutton(testId)}>
        Edit water
        <svg width="16" height="16">
          <use href="/src/Images/welcome-page/iconSprite.svg#icon-pencil"></use>
        </svg>
      </button>
      {isModalOpen && (
        <EditModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          waterId={waterId}
        />
      )}
  </>
  );
};
