import { useSelector } from "react-redux";
import Modal from 'react-modal';

import { Button, Text, TextWater, Wrap, BtnWrap } from "./DailyNorma.styled";

Modal.setAppElement('#root');

export const DailyNorma = () => {
    const dailyNorma = useSelector(state => state.auth.user.dailyNorma);
   
    const water = dailyNorma ? (dailyNorma / 1000).toFixed(1) : "0";
    
    return (
        <Wrap>
            <Text>My daily norma</Text>
            <BtnWrap>
                <TextWater>{water || 0} L</TextWater>
                <Button type="button"><span>Edit</span></Button>
            </BtnWrap>
        </Wrap>
    )
}