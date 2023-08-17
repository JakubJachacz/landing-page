import { useState } from "react";
import {
  ButtonsContainer,
  MainPictureContainer,
  Pagination,
  PaginationButton,
  PaginationCounter,
  StyledArrowLeft,
  StyledArrowRight,
  StyledSlideshow,
} from "./styled";
import image1 from "../../images/Photo_01.png";
import image2 from "../../images/Photo_01_two.png";

const images = [image1, image2];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const isAtFirstImage = currentIndex === 0;
  const isAtLastImage = currentIndex === images.length - 1;

  return (
    <StyledSlideshow>
      <MainPictureContainer imageUrl={images[currentIndex]}>
        <Pagination>
          <ButtonsContainer>
            <PaginationButton
              onClick={handlePrevSlide}
              disabled={isAtFirstImage}
            >
              <StyledArrowLeft disabled={isAtFirstImage} />
            </PaginationButton>
            <PaginationButton
              onClick={handleNextSlide}
              disabled={isAtLastImage}
            >
              <StyledArrowRight disabled={isAtLastImage} />
            </PaginationButton>
          </ButtonsContainer>
          <PaginationCounter>
            {currentIndex + 1}/{images.length}
          </PaginationCounter>
        </Pagination>
      </MainPictureContainer>
    </StyledSlideshow>
  );
};

export default Slideshow;
