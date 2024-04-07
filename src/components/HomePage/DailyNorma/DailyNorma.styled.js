import styled from "styled-components";

export const Wrap = styled.div` 
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 10px;
  border: 1px solid var(--second-background-color);
  background: rgb(255, 255, 255);
  box-shadow: 0 4px 8px 0 rgba(158, 187, 255, 0.12);
  padding: 8px 20px;
  
  position:static;

@media (min-width: 768px){
position:absolute;    
height: 76px;
  }
`;

export const Text = styled.p`
margin-bottom: 12px;
font-size: 18px;
line-height: 1.3;
color: var(--primary-txt-color);
`;

export const TextWater = styled.p`
font-size: 24px;
line-height: 1;
color: var(--primary-color);
`;

export const Button = styled.button`
padding: 0;
font-size: 16px;
line-height: 1.3;
color: #8BAEFF;
border: none;
background-color:var(--white-color);
outline: none;
span {
    color: transparent;
    overflow: hidden;

    background: linear-gradient(
      90deg,
      var(--orange-color) 0%,
      var(--orange-color) 50%,
      var(--light-blue-color) 50%,
      var(--light-blue-color) 100%
    );

    background-size: 200% 100%;
    background-position: 100%;

    -webkit-background-clip: text;
    background-clip: text;
  }

  &:hover {
    & span {
      background-position: 0 100%;
    }
  }
`;

export const BtnWrap = styled.div`
display: flex;
gap: 12px;
align-items: baseline;
`

export const DailyModal = styled.div`
margin-bottom: 12px;
font-size: 18px;
line-height: 1.3;
color: var(--primary-txt-color);
`;