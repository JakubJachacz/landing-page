import React, { useRef } from "react"; 
import {
  NavButton,
  NavItem,
  StyledLogo,
  StyledNavigation,
  StyledTopBar,
  Title,
} from "./styled";

const TopBar = ({ scrollToRef }) => {
  const handleClick = (refName) => {
    scrollToRef(refName);
  }

  return (
    <StyledTopBar>
      <Title>
        <StyledLogo />
      </Title>
      <StyledNavigation>
        <NavItem onClick={() => handleClick('offer')}>Oferta</NavItem>
        <NavItem onClick={() => handleClick('contact')}>Kontakt</NavItem>
        <NavButton />
      </StyledNavigation>
    </StyledTopBar>
  );
};

export default TopBar;
