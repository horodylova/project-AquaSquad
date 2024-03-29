import Container from "../Container/Container";

export const Header = () => {

  return (
    <Container>
      <HeaderContainer>
   
      <Navigation>
        <HeaderLogo/>
          <UserLogo />
          <UserAuth />
      </Navigation>
   
  </HeaderContainer>
    </Container>
  );
};
