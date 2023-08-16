import React, { useState } from "react";
import {
  DarkOverlay,
  NavButton,
  NavItem,
  NavList,
  StyledList,
  StyledLogo,
  StyledNavigation,
  StyledTopBar,
  Title,
} from "./styled";

const TopBar = ({ scrollToRef }) => {
  const [showList, setShowList] = useState(false);

  const handleClick = (refName) => {
    scrollToRef(refName);
    setShowList(false);
  };

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <>
      <StyledTopBar>
        <Title>
          <StyledLogo />
        </Title>
        <StyledNavigation>
          <NavItem isDesktop onClick={() => handleClick("offer")}>
            Oferta
          </NavItem>
          <NavItem isDesktop onClick={() => handleClick("contact")}>
            Kontakt
          </NavItem>
          <NavButton onClick={toggleList} showList={showList} />
          {showList && (
            <NavList>
              <StyledList isFirst>
                <NavItem onClick={() => handleClick("offer")}>Oferta</NavItem>
              </StyledList>
              <StyledList>
                <NavItem onClick={() => handleClick("contact")}>
                  Kontakt
                </NavItem>
              </StyledList>
              <StyledList isLast>
                kontakt@safekohouse.com +48 609 505 111
              </StyledList>
            </NavList>
          )}
        </StyledNavigation>
      </StyledTopBar>
      {showList && <DarkOverlay />}
    </>
  );
};

export default TopBar;
