import Container from "../Container/Container";
import { HeaderContainer, Navigation } from './Header.styled';
import { HeaderLogo } from "../HeaderLogo/HeaderLogo";


export const Header = () => {

  return (
    <Container>
      <HeaderContainer>
   
      <Navigation>
        <HeaderLogo/>
          {/* <UserLogo />
          <UserAuth /> */}
      </Navigation>
   
  </HeaderContainer>
    </Container>
  );
};
