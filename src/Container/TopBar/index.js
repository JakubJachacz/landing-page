import React, { useEffect, useRef, useState } from "react";
import {
  DarkOverlay,
  ListContainer,
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
  const listRef = useRef(null); 

  const handleClick = (refName) => {
    scrollToRef(refName);
    setShowList(false);
  };

  const toggleList = () => {
    setShowList(!showList);
  };

  const closeList = () => {
    setShowList(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (event) => {
    if (listRef.current && !listRef.current.contains(event.target)) {
      closeList();
    }
  };

  const PhoneNumber = "+48 609 505 111";
  const handlePhoneNumberClick = () => {
    window.location.href = `tel:${PhoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:kontakt@safekohouse.com";
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
            <NavList showAnimation={showList} ref={listRef}>
              <StyledList isFirst>
                <NavItem onClick={() => handleClick("offer")}>Oferta</NavItem>
              </StyledList>
              <StyledList>
                <NavItem onClick={() => handleClick("contact")}>
                  Kontakt
                </NavItem>
              </StyledList>
              <ListContainer>
                <StyledList onClick={handleEmailClick}>kontakt@safekohouse.com</StyledList>
                <StyledList isLast onClick={handlePhoneNumberClick}>+48 609 505 111</StyledList>
              </ListContainer>
            </NavList>
          )}
        </StyledNavigation>
      </StyledTopBar>
      {showList && <DarkOverlay />}
    </>
  );
};

export default TopBar;
