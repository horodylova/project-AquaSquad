import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalType, setOpenModal } from '../../../redux/modals/modalSlice';
import { selectIsOpenModal } from '../../../redux/modals/modalSelectors';

export const Backdrop = ({ children }) => {
  const dispatch = useDispatch();
  const modalState = useSelector(selectIsOpenModal);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        dispatch(setOpenModal(false));
        dispatch(setModalType(''));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, modalState]);

  const handleClose = (e) => {
    if (e.target.id === 'backdrop') {
      dispatch(setOpenModal(false));
      dispatch(setModalType(''));
    }
  };

  return (
    modalState && (
      <div
        id="backdrop"
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          zIndex: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          overflow: 'auto',
        }}
        onClick={handleClose}
      >
        {children}
      </div>
    )
  );
};
