import { css, styled } from "styled-components";
import SecondaryPicture from "../../images/Photo_02.png";
import ThirdPicture from "../../images/Photo_03.png";
import ThirdPictureSmall from "../../images/Photo_03_small.png";
import FourthPicture from "../../images/Photo_04.png";
import FourthPictureSmall from "../../images/Photo_04_small.png"; 
import FifthPicture from "../../images/Photo_05.png";
import FifthPictureSmall from "../../images/Photo_05_small.png";
import { ReactComponent as VectorRight } from "../../images/VectorRight2.svg";

export const DetailsWrapper = styled.section`
  display: grid;
  place-items: center;
  padding-top: 175px;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
`;

export const PictureWrapper = styled.div`
  max-width: 1092px;
  max-height: 615px;
`;

export const PictureTwo = styled.div`
  background: url(${SecondaryPicture}) no-repeat center / cover;
  max-width: 1092px;
  width: 100%;
  max-height: 615px;
  height: 100%;
  aspect-ratio: 2 / 1;

  @media (max-width: 750px) {
    width: 320px;
    height: 200px;
  }
`;

export const DetailsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1092px;
  width: 100%;
  height: 100%;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const ColumnFirst = styled.div`
  margin: 34px 0 10px;
`;

export const ColumnSecond = styled.div`
  margin: 211px 0 10px;
  display: flex;
`;

export const BorderWrap = styled.div`
  max-width: 539px;
  width: 100%;
  height: 100%;

  @media (max-width: 750px) {
    width: 320px;
    margin-left: 20px;
  }
`;

export const DetailsTitle = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 39px;
  color: #181818;

  ${({ isSecond }) =>
    isSecond &&
    css`
      margin-top: 179px;

      @media (max-width: 750px) {
        margin-top: 48px;
      }
    `}

  @media (max-width: 750px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const Description = styled.p`
  max-width: 539px;
  width: 100%;
  font-size: 18px;
  font-style: normal;
  color: #474945;
  line-height: 24px;
  padding: 12px 0 12px;
`;

export const Wrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 24px;
  border-bottom: 1px solid #181818;
  height: 48px;
  grid-column: 1;
  max-width: 430px;

  ${({ isFirst }) =>
    isFirst &&
    css`
      border-top: 1px solid #181818;
    `}
`;

export const Counter = styled.p`
  padding: 12px 0;
  margin-left: -1px;
  color: #474945;
`;

export const Details = styled.div`
  color: #474945;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;

  @media (max-width: 750px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const PictureThree = styled.div`
  background-image: url(${ThirdPicture});
  max-width: 425px;
  width: 100%;
  height: 238px;
  padding-top: 110px;
  background-repeat: no-repeat;
  background-position: bottom;
  aspect-ratio: 2 / 1;

  @media (max-width: 750px) {
    width: 320px;
    height: 200px;
    background-image: url(${ThirdPictureSmall});
    padding-top: 48px;
  }
`;

export const StyledP = styled.p`
  font-size: 124px;
  line-height: 113px;
  color: #181818;
  margin: 44px 0;

  @media (max-width: 750px) {
    font-size: 69px;
    line-height: 91px;
    margin: 8px 0;
  }
`;

export const PictureFour = styled.div`
  background-image: url(${FourthPicture});
  background-repeat: no-repeat;
  max-width: 427px;
  width: 100%;
  height: 569px;
  margin-left: 120px;
  margin-top: calc(170px + 48px);

  @media (max-width: 750px) {
    background-image: url(${FourthPictureSmall});
    margin: 48px 0 0 0;
    height: 420px;
  }
`;

export const LocalWrap = styled.div`
  margin-left: 103px;
  max-width: 430px;
  width: 100%;

  @media (max-width: 750px) {
    margin: 0;
  }
`;

export const LocalButton = styled.button`
  padding: 17px 25px 18px;
  max-width: 218px;
  width: 100%;
  height: 60px;
  margin-top: 60px;
  border-radius: 43px;
  background-color: #181818;
  color: #fafafa;
  border: 1px solid #181818;
  gap: 8px;
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  line-height: 22px;

  @media (max-width: 750px) {
    width: 201px;
    font-size: 14px;
    line-height: 21px;
    margin: 45px 0 0 60px;
  }

  &:hover {
    cursor: pointer;
    background-color: #2c2c2c;
  }

  &:active {
    background-color: #f5f5f5;
    color: #181818;
  }
`;

export const StyledVectorRight = styled(VectorRight)`
  padding-left: 12px;
`;

export const PictureFive = styled.div`
  max-width: 1400px;
  width: 100%;
  max-height: 524px;
  height: 100%;
  margin-top: 105px;
  aspect-ratio: 1 / 2;
  background-image: url(${FifthPicture});

  @media (max-width: 750px) {
    background-image: url(${FifthPictureSmall});
    background-repeat: no-repeat;
    width: 340px;
    height: 400px;
  }
`;
