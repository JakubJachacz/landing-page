import { NavItem, SafekoHouse, StyledIcon, StyledNavigation, StyledTopBar, Title } from "./styled";

const TopBar = () => {
  return (
    <StyledTopBar>
      <Title>
      <StyledIcon />
        <SafekoHouse isSafeko>Safeko_</SafekoHouse>
        <SafekoHouse isHouse>house</SafekoHouse>
      </Title>
      <StyledNavigation>
        <NavItem>Oferta</NavItem>
        <NavItem>Kontakt</NavItem>
      </StyledNavigation>
    </StyledTopBar>
  );
};

export default TopBar;
