import { useState /* , useEffect */ } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import DailyNormaModal from './DailyNormaModal';

import { Button, Text, TextWater, Wrap, BtnWrap } from './DailyNorma.styled';

Modal.setAppElement('#root');

export const DailyNorma = () => {
  const dailyNorma = useSelector((state) => state.auth.user.dailyNorma);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const water = dailyNorma ? (dailyNorma / 1000).toFixed(1) : '0';

  const handleModalClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Wrap>
        <Text>My daily norma</Text>
        <BtnWrap>
          <TextWater>{water || 0} L</TextWater>
          <Button type="button" onClick={handleModalClick}>
            <span>Edit</span>
          </Button>
        </BtnWrap>
      </Wrap>
      <DailyNormaModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
