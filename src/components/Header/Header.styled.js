import styled from 'styled-components';

export const HeaderContainer = styled.header`
  &.container {
    padding-top: 8px;
    position: relative;//creates scroll and extra space below header, absolute makes logo and userlogo go through overlay
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
`;


// export const HeaderContainer = styled.header`
// position: relative;
// // z-index: 1;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding-top: 8px;
//   margin-left: auto;
//   margin-right: auto;`

  // export const HeaderContainer = styled.header`
//   &.container {
//     padding-top: 8px;
//     position: absolute;
//     z-index: 1;
//     transform: translate(-50%);
//     left: 50%;
//     display: flex;
//     gap: 8px;
//     justify-content: space-between;
//   }
// `;

