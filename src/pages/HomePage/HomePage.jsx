import Container from '../../components/Container/Container';
import Modal from 'react-modal';
import { useState } from 'react';
import {
  DeleteModalContainer,
  DeleteModalTitle,
  DelBtn,
  CancelBtn,
  TitleSvgContainer,
  DeleteModalText,
  BtnContainer,
} from './HomePage.styled';

import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
// import { DailyNorma } from '../../components/HomePage/DailyNorma';
// import { WaterRatioPanel } from '../../components/HomePage/WaterRatioPanel/WaterRatioPanel';
import { Calendar } from '../../components/HomePage/Calendar/Calendar';
<<<<<<< HEAD
// import { TodayList } from '../../components/HomePage/TodayList/TodayList';

=======
import { TodayList } from '../../components/HomePage/TodayList/TodayList';
import sprite from '../../../src/Icons/signIn-signUp/sprite.svg';
import css from '../HomePage/Home.module.css';
>>>>>>> d7d51bf (add DeleteEntry HomePage)

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

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
<<<<<<< HEAD
            {/* <DailyNorma />
            <WaterRatioPanel />
            <TodayList /> */}
            <Calendar/>
=======
        <DailyNorma />
        <WaterRatioPanel />
        <TodayList />
        <Calendar />
>>>>>>> d7d51bf (add DeleteEntry HomePage)
        <button onClick={() => dispatch(logOut())} type="button">
          Logout
        </button>

        <button onClick={openModal}>Open modal</button>

        <Modal
          isOpen={isModalOpen}
          overlayClassName={css.Overlay}
          className={css.Modal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <DeleteModalContainer>
            <TitleSvgContainer>
              <DeleteModalTitle>Delete entry</DeleteModalTitle>
              <svg onClick={closeModal} width="24" height="24" cursor="pointer">
                <use href={`${sprite}#icon-close-cross`} />
              </svg>
            </TitleSvgContainer>

            <DeleteModalText>
              Are you sure you want to delete the entry?
            </DeleteModalText>
            <BtnContainer>
              <DelBtn onClick={closeModal}>Delete</DelBtn>
              <CancelBtn onClick={closeModal}>Cancel</CancelBtn>
            </BtnContainer>
          </DeleteModalContainer>
        </Modal>
      </Container>
    </>
  );
};

export default HomePage;
