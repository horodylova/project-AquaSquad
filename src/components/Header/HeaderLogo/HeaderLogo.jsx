import { Link } from 'react-router-dom';
import { Logo, LogoIcon, LogoText } from './HeaderLogo.styled';
import logo from '../../../Icons/Logo.svg';

export const HeaderLogo = () => (
  <Link to={'/'}>
    <Logo>
      <LogoIcon>
        <use href={logo + '#icon-water-logo'}></use>
      </LogoIcon>
      <LogoText>
        Tracker <br /> of water
      </LogoText>
    </Logo>
  </Link>
);
