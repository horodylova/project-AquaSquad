// import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 8px 0 24px 0;
  @media screen and (min-width: 768px) {
    padding: 16px 0 40px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 12px 0 49px 0;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const NavigationWrapper = styled.div`

		width: 320px;
		padding: 0 20px;
		margin: 0 auto;
	
	@media screen and (min-width: 768px) {
		
			width: 768px;
			padding: 0 32px;
		
	}
	@media screen and (min-width: 1440px) {
		
			width: 1440px;
			padding: 0 112px;
		
			}`