// import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 8px 0 24px 0;
  @media screen and (min-width: 768px) {
    padding: 16px 0 40px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 12px 0 22px 0;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


// export const HeaderContainer = styled.div`
//   padding: 20px;
// `;

// export const Navigation = styled.nav`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const StyledLink = styled(Link)`
//   padding: 8px 16px;
//   color: #ffffff; /* White text color */
//   text-shadow:
//     0 0 5px #00baff,
//     0 0 10px #00baff,
//     0 0 20px #00baff,
//     0 0 40px #00baff,
//     0 0 80px #00baff;
//   transition:
//     color 0.3s,
//     text-shadow 0.3s;

//   &:hover,
//   &:focus {
//     color: #00baff; /* Blue text color on hover/focus */
//     text-shadow:
//       0 0 5px #00baff,
//       0 0 10px #00baff,
//       0 0 20px #00baff,
//       0 0 40px #00baff,
//       0 0 80px #00baff;
//   }
// `;

// export const IconWrapper = styled.svg`
//   width: ${(props) => props.size || '12px'};
//   height: ${(props) => props.size || '12px'};
//   fill: ${(props) => props.color || '#ffffff'};
//   display: inline-block;
//   margin-right: 5px;
//   box-shadow:
//     0 0 5px #00baff,
//     0 0 10px #00baff,
//     0 0 20px #00baff,
//     0 0 40px #00baff,
//     0 0 80px #00baff;
// `;
