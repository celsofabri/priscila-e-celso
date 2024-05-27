import React from 'react';
import { StyledWrapper } from 'assets/global/styled';
import {
  StyledDresscodeGallery,
  StyledDresscodeGalleryTitle,
  StyledDresscodeGalleryContent
} from './styled';

const DresscodeGallery = ({ pageTitle, images }) => {
  return (
    <StyledDresscodeGallery>
      <StyledWrapper>
        <StyledDresscodeGalleryTitle>
          {pageTitle}
        </StyledDresscodeGalleryTitle>
        <StyledDresscodeGalleryContent>
          {images.map((image, i) => {
            return <img key={i} src={image.src} />;
          })}
        </StyledDresscodeGalleryContent>
      </StyledWrapper>
    </StyledDresscodeGallery>
  );
};

export default DresscodeGallery;
