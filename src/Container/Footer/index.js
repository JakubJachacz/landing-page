import { forwardRef } from "react";
import {
  Contact,
  FooterContainer,
  FooterWrapper,
  Maps,
  QuestionsContainer,
  Info,
  QuestionsTitle,
  FooterText,
  ReadMore,
  FooterTextWrap,
} from "./styled";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const FooterComponent = forwardRef((props, ref) => {
  const defaultCenter = { lat: 51.26718, lng: 22.562455 };

  const handleEmailClick = () => {
    window.location.href = "mailto:kontakt@safekohouse.com";
  };

  const redirectToCookies = () => {
    window.location.href = 'https://github.com/JakubJachacz/landing-page';
  };

  const redirectToPrivacyPolitics = () => {
    window.location.href = 'https://github.com/JakubJachacz/landing-page';
  };

  const PhoneNumber = "+48 609 505 111";
  const handlePhoneNumberClick = () => {
    window.location.href = `tel:${PhoneNumber}`;
  };

  const redirectToAkanza = () => {
    window.open('https://akanza.pl/', '_blank');
  }; 

  return (
    <FooterContainer>
      <FooterWrapper>
        <Contact ref={ref}>Kontakt</Contact>
        <QuestionsContainer>
          <QuestionsTitle>Masz pytania?</QuestionsTitle> 
          <Info onClick={handleEmailClick}>
            kontakt@safekohouse.com
          </Info>
          <Info onClick={handlePhoneNumberClick}>{PhoneNumber}</Info>
        </QuestionsContainer>
        <Maps>
          <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          >
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "400px" }}
              center={defaultCenter}
              zoom={13}
            >
              <Marker position={defaultCenter} />
            </GoogleMap>
          </LoadScript>
        </Maps>
        <FooterTextWrap>
        <FooterText>© Safeko house</FooterText>
        <FooterText isAkanza onClick={redirectToAkanza}>realizacja: akanza.pl</FooterText>
        </FooterTextWrap>
        <FooterText isClickable onClick={redirectToPrivacyPolitics}>Polityka prywatności</FooterText>
        <FooterText isLast>
          Stosujemy pliki cookies. Korzystanie ze strony bez zmiany ustawień
          przeglądarki oznacza, że pliki cookies będą zamieszczane w Twoim
          urządzeniu. 
        <ReadMore onClick={redirectToCookies}>Czytaj więcej</ReadMore>
        </FooterText>
      </FooterWrapper>
    </FooterContainer>
  );
});

export default FooterComponent;
