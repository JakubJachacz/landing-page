import { NavButton, NavItem, StyledLogo, StyledNavigation, StyledTopBar, Title } from "./styled";

const TopBar = () => {
  return (
    <StyledTopBar>
      <Title>
      <StyledLogo /> 
      </Title>
      <StyledNavigation>
        <NavItem>Oferta</NavItem>
        <NavItem>Kontakt</NavItem>
        <NavButton />
      </StyledNavigation>
    </StyledTopBar>
  );
};

export default TopBar;
