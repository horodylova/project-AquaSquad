import { styled } from 'styled-components';

export const LogoutModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 24px;
  border-radius: 10px;
  background: #FFFFFF; 
  width: 280px;
  // z-index:20;
  @media screen and (min-width:768px){
    width:592px;
  }
`;

export const DivOfHeadingOfLogOutModal = styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:24px;
width: 232px;
@media screen and (min-width:768px){
    width:544px;
  }
`;

export const HeadingOfLogOutModal = styled.p`
  width: 200px;
  color: #2F2F2F;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; 
  font-family: Roboto;
  margin:0;
  width: 96px;
  @media screen and (min-width:768px){
    width: 384px;
  }
`;

export const BtnOfCloseOfLogOutModal = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer; 
  background: none; 
  border: none; 
`;
export const ParagraphOfExit = styled.p`
  width: 232px;
  color: #2F2F2F;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; 
  margin-bottom:24px;
  @media screen and (min-width:768px){
    width: 338px;
    display:flex;
    justify-content:flex-start;// check how it looks on mobile version
  }
`;
export const BtnOfExit = styled.button`
 display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
   border-color: transparent;
 background: #EF5050;
  color:  #FFFFFF;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition: box-shadow 0.3s ease, transform 0.3s ease, width 0.3s ease;
  width: 232px;
  height: 36px;
  padding: 8px 30px;
  &:not(:first-child) {
    margin-bottom: 24px;
  }
  &:not(:last-child) {
    background-color: #EF5050;
    color:#FFFFFF;
;
  }
  &:hover {
    box-shadow: 0px 8px 16px 0px rgba(64, 123, 255, 0.5);
    transform: scale(1.05);
  }
  @media screen and (min-width: 768px) {
    width: 160px;
    height: 44px;
    font-size: 18px;
    padding: 10px 30px;
    &:not(:last-child) {
      margin-right: 24px;
      margin-bottom: 0;
    }
    &:not(:first-child) {
      margin-bottom: 0;
    }
  }
  
`;
export const BtnOfCancelModalLogOut = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
   border-color: transparent;
 background: #D7E3FF;
  color:  #407BFF;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition: box-shadow 0.3s ease, transform 0.3s ease, width 0.3s ease;
  width: 232px;
  height: 36px;
  padding: 8px 30px;
//   &:not(:first-child) {
//     margin-bottom: 24px;
//   }
//   &:not(:last-child) {
//     background-color: #EF5050;
//     color:#FFFFFF;
// ;
//   }
  &:hover {
    box-shadow: 0px 8px 16px 0px rgba(64, 123, 255, 0.5);
    transform: scale(1.05);
  }
  @media screen and (min-width: 768px) {
    width: 160px;
    height: 44px;
    font-size: 18px;
    padding: 10px 30px;
    // &:not(:last-child) {
    //   margin-right: 24px;
    //   margin-bottom: 0;
    // }
    // &:not(:first-child) {
    //   margin-bottom: 0;
    // }
  }
`;
export const DivOfBtns = styled.div`
display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 24px;
  // width: 232px;
   @media screen and (min-width: 768px) {
    // width: 344px;
    flex-direction: row;
    justify-content: flex-end;
    
  }
  @media screen and (min-width: 1440px) {
    // width: 344px;
    justify-content: flex-start;
    
  }
`;

// import styled from 'styled-components';


// export const LogOutWindow = styled.div`
//   background-color: #ffffff;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   border-radius: 10px;
//   width: 280px;
//   padding: 32px 24px;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-end;
//   @media screen and (min-width: 768px) {
//     width: 592px;
//   }
// `;

// export const LogOutHeader = styled.div`
//   font-size: 26px;
//   font-weight: 500;
//   margin-bottom: 24px;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `;

// export const LogOutText = styled.div`
//   font-size: 18px;
//   margin-bottom: 24px;
//   line-height: 20px;
// `;

// export const LogOutBtns = styled.div`
//   display: flex;
//   flex-direction: column-reverse;
//   align-items: center;
//   gap: 24px;

//   @media screen and (min-width: 768px) {
//     flex-direction: row;
//     justify-content: flex-end;
//   }
//   @media screen and (min-width: 1440px) {
//     justify-content: flex-start;
//   }
// `;

// export const LogOutBtn = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 10px;
//   background-color: #EF5050;
//   color: #ffffff;
//   box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
//   transition: box-shadow 0.3s ease, transform 0.3s ease, width 0.3s ease;
//   width: 232px;
//   height: 36px;
//   padding: 8px 30px;
//   &:not(:first-child) {
//     margin-bottom: 24px;
//   }
//   &:not(:last-child) {
//     background-color: #D7E3FF;
//     color: #407BFF;
//   }
//   &:hover {
//     box-shadow: 0px 8px 16px 0px rgba(64, 123, 255, 0.5);
//     transform: scale(1.05);
//   }
//   @media screen and (min-width: 768px) {
//     width: 160px;
//     height: 44px;
//     font-size: 18px;
//     padding: 10px 30px;
//     &:not(:last-child) {
//       margin-right: 24px;
//       margin-bottom: 0;
//     }
//     &:not(:first-child) {
//       margin-bottom: 0;
//     }
//   }
// `;

// export const LogOutClose = styled.button`
//   background-color: #ECF2FF;
//   transition: transform 0.5s ease-out;
//   padding: 4px;
//   width: 32px;
//   height: 32px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   svg {
//     width: 24px;
//     height: 24px;
//     fill: #ECF2FF;
//     stroke: #407BFF;
//   }
//   &:active {
//     svg {
//       transform: scale(0.9);
//     }
//   }
// `;

// export const HoverCloseBtn = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 10px;
//   background-color: #EF5050;
//   color: #ffffff;
//   box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
//   transition: box-shadow 0.3s ease, transform 0.3s ease, width 0.3s ease;
//   width: 232px;
//   height: 36px;
//   padding: 8px 30px;
  
// `;

// export const Button = styled.button`
// display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;

//   font-size: 16px;
//   line-height: calc(20 / 16);
//   font-weight: 500;
//   text-align: center;
//   color: red;
//   width: 100%;
//   padding: 8px 30px;`