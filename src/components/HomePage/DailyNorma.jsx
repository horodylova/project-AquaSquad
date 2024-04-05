import { useSelector } from "react-redux";

import { Button, Text, TextWater, Wrap, BtnWrap } from "./DailyNorma.styled.js";

export const DailyNorma = () => {
    const dailyNorma = useSelector(state => state.auth.user.dailyNorma);
   
    const water = (dailyNorma / 1000).toFixed(1)
    
    return (
        <Wrap>
            <Text>My daily norma</Text>
            <BtnWrap>
                <TextWater>{water} L</TextWater>
                <Button type="button"><span>Edit</span></Button>
            </BtnWrap>
        </Wrap>
    )
}