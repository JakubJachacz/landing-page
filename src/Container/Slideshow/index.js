import { useEffect, useState } from "react";
import {
  ButtonsContainer,
  Loading,
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
  const [preloadedImages, setPreloadedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    const preloadImages = images.map((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
      return img;
    });

    Promise.all(preloadImages).then(() => {
      setPreloadedImages(preloadImages);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAtLastImage) {
        setCurrentIndex(0);
      } else {
        handleNextSlide();
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex, isAtLastImage]);

  return (
    <StyledSlideshow>
          {isLoading ? ( 
      <Loading>Loading...</Loading>
    ) : (
      <MainPictureContainer imageUrl={preloadedImages[currentIndex]?.src}>
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
    )}
    </StyledSlideshow>
  );
};

export default Slideshow;
