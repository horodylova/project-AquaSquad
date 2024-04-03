import { useEffect } from 'react';
import sprite from '../../Images/welcome-page/iconSprite.svg';
import {
  ReactModalStyled,
  Title,
  WrapHeader,
} from './DeleteModal.styled';

export const DeleteModal = ({
  titleText,
  isOpen,
  onRequestClose,
  children,
}) => {

  useEffect(() => {
        const body = document.body;
        if (isOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
        return () => {
            body.style.overflow = 'auto';
        };
  }, [isOpen]);
  
  return (
    <ReactModalStyled
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
      }}
    >
      <WrapHeader>
        <Title>{titleText}</Title>
        <button  className="cross-btn" type="button" onClick={onRequestClose}>
          <svg className='cross-svg'>
            <use xlinkHref={`${sprite}#icon-plus`} />
          </svg>
        </button>
      </WrapHeader>
      {children}
    </ReactModalStyled>
  );
};