import Container from '../../components/Container/Container';
import Modal from 'react-modal';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { DailyNorma } from '../../components/HomePage/DailyNorma';
import { WaterRatioPanel } from '../../components/HomePage/WaterRatioPanel/WaterRatioPanel';
import { Calendar } from '../../components/HomePage/Calendar/Calendar';
import { TodayList } from '../../components/HomePage/TodayList/TodayList';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const customStyles = {
    content: {
      width: '1008px',
      height: '592px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      paddingTop: '32px',
      paddingBottom: '32px',
      paddingLeft: '24px',
      paddingRight: '24px',
    },
    overlay: {
      position: 'fixed',
      backgroundColor: 'rgba(0, 0, 0, 0.80)',
    },
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  Modal.setAppElement('#root');

  return (
    <>
      <Container>
        <h1>Home page</h1>
            <DailyNorma />
            <WaterRatioPanel />
            <TodayList />
            <Calendar/>
        <button onClick={() => dispatch(logOut())} type="button">
          Logout
        </button>

        <button onClick={openModal}>Open modal</button>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h1>Setting</h1>
          <p>Your photo</p>

          <button onClick={closeModal}>close</button>
        </Modal>
      </Container>
    </>
  );
};

export default HomePage;