import styled from 'styled-components';

export const ContainerSettings = styled.div`

  max-width: 100%;
  padding: 32px 12px;
  z-index: 100;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background-color: grey; #FFFFFF
  border-radius: 10px;


@media screen and (min-width: 768px) {
  
    padding: 32px 24px;
    width: 704px;
  
}
@media screen and (min-width: 1280px) {
  
    padding: 32px 24px;
    width: 1008px;
  
}`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 36px;
  right: 12px;
  height: 24px;

  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-bottom: 0px;
//   svg {
//     stroke: #407BFF;
//     width: 24px;
//     height: 24px;
//   }`;

export const TitlePart = styled.h3`
  font-size: 18px;
  font-weight: 500;
  font-family: Roboto;
  line-height: 20px;
  color: #2F2F2F;
margin-bottom: 8px;

`;

export const Title = styled.h2`
  font-size: 26px;
  font-family: Roboto;
  line-height: 32px;
  font-weight: 500;
  color: #2F2F2F;
margin-bottom: 24px;
`;

export const UploadWrapper = styled.ul`
margin-bottom: 24px;
  display: flex;
  align-items: center;`;

export const AvatarContainer = styled.li`
  width: 80px;
  height: 80px;
  div {
    width: auto;
    height: 100%;
    background-color: red;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 52px;
    color: white;
    background-color: blue;
  }`;

export const UserPic = styled.div`
  border-radius: 80px;
  width: 80px;
  height: 80px;
  margin-right: 8px;
  
  img {
    width: 100%;
  height: 100%;
  border-radius: 80px;
  object-position: center;
  object-fit: cover;
  }
  `;

export const UploadBox = styled.li`
  cursor:pointer`;

export const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;`


export const UploadIcon = styled.button`
  
  background-color: transparent;
  border: none;
  cursor: pointer;
  
  svg {
    stroke: #407BFF;
    width: 16px;
    height: 16px;
  }}`;

export const UploadText = styled.span`
  color: rgba(64, 123, 255, 1);
  cursor: pointer;
  font-size: 14px;

  font-weight: 500;
  line-height: 18px; /* 128.571% */
  font-size: 14px;`;

// export const ContainerSettings = styled.div`
//   position: absolute;
//   left: 50%;
//   top: 40px;
//   transform: translate(-50%);

//   color: #2F2F2F;
//   background-color: #FFFFFF;
//   width: 280px;
//   padding: 32px 12px;
//   border-radius: 10px;

//   @media screen and (min-width: 768px) {
//     width: 704px;
//     padding: 32px 24px;
//     border-radius: 10px;
//   }
//   @media screen and (min-width: 1440px) {
//     width: 1008px;
//     top: 50%;
//     transform: translate(-50%, -50%);
//   }
// `;
// export const TitlePart = styled.h3`
//   font-size: 18px;
//   font-weight: 500;
//   line-height: calc(20 / 18);

//   margin-top: ${props => props.$marginTop || '24px'};
//   margin-bottom: ${props => props.$marginBottom || '16px'};
// `;

// export const Title = styled.h2`
//   font-size: large;
//   line-height: calc(32 / 26);
//   font-weight: 500;
//   color: #2F2F2F;

//   margin-bottom: ${props => props.$marginBottom || ''};
//   margin-top: ${props => props.$marginTop || ''};
// `;
// export const WrapperUpload = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;

//   margin-bottom: 24px;

//   img {
//     border-radius: 100%;
//   }

//   button {
//     display: flex;
//     align-items: center;
//     gap: 8px;
//     background-color: transparent;
//     color: #407BFF;
//     cursor: pointer;
//     font-size: 14px;
//     font-weight: 500;
//     line-height: calc(18 / 14);
//     stroke: #407BFF;
//     fill: none;
//   }

//   /* width: 80px;
//   height: 80px;
//   border-radius: 100%; */
// `;

// export const ContainerAvatar = styled.div`
//   width: 80px;
//   height: 80px;
//   div {
//     width: auto;
//     height: 100%;
//     background-color: red;
//     border-radius: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 52px;
//     color: #ffffff;
//     background-color: #407BFF;
//   }
// `;

// export const WrapperForma = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
// `;

// export const WrapperFormaMain = styled.div`
//   display: flex;
//   gap: 24px;
//   flex-direction: column;

//   @media screen and (min-width: 768px) {
//   }
//   @media screen and (min-width: 1440px) {
//     flex-direction: row;
//   }
// `;
// export const WrapperFormaLeft = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
//   width: 100%;

//   @media screen and (min-width: 768px) {
//     width: 392px;
//   }
// `;

// export const ContainerForm = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
//   width: 100%;
// `;

// export const WrapperFormaRight = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
//   width: 100%;

//   @media screen and (min-width: 768px) {
//     width: 392px;
//   }
// `;

// // export const HoverBtnStyled = styled.button`
// // //   transition: color 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);

// //   position: relative;
// //   &:hover {
// //     color: #ff9d43;
// //   }
// //   &:before {
// //     content: '';
// //     position: absolute;
// //     bottom: 0;
// //     left: 0;
// //     width: 0;
// //     height: 1px;
// //     background-color: #ff9d43;
// //     transition: width 0.3s ease;
// //   }
// //   &:hover:before {
// //     width: 100%;
// //   }
// // `;

// export const CloseBtn = styled.button`
//   position: absolute;
//   top: 36px;
//   right: 12px;
//   height: 24px;

//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   margin-bottom: 0px;
//   svg {
//     stroke: #407BFF;
//     width: 24px;
//     height: 24px;
//   }

//   @media screen and (min-width: 768px) {
//     right: 24px;
//   }
// `;

// // export const InputSettingEdit = styled(Input)`
// //   color: #9EBBFF;
// //   opacity: 0.6;

// //   &:focus,
// //   &:active {
// //     color: #407BFF;
// //     opacity: 1;
// //   }
// // `;