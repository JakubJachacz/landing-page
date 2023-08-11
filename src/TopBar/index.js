import { NavItem, StyledLogo, StyledNavigation, StyledTopBar, Title } from "./styled";

const TopBar = () => {
  return (
    <StyledTopBar>
      <Title>
      <StyledLogo /> 
      </Title>
      <StyledNavigation>
        <NavItem>Oferta</NavItem>
        <NavItem>Kontakt</NavItem>
      </StyledNavigation>
    </StyledTopBar>
  );
};

export default TopBar;
