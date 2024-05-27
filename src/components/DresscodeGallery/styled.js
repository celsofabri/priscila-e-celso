import styled from 'styled-components';
import { fonts, colors } from 'assets/global/tokens';

export const StyledDresscodeGallery = styled.div`
  display: block;
  padding: 50px 0;
`;

export const StyledDresscodeGalleryTitle = styled.h2`
  margin: 0;
  font-family: ${fonts.secondary};
  font-size: 48px;
  color: ${colors.blue700};
`;

export const StyledDresscodeGalleryContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  img {
    width: 33%;
    height: auto;
    object-fit: cover;

    @media screen and (max-width: 960px) {
      width: 50%;
    }

    @media screen and (max-width: 580px) {
      width: 100%;
    }
  }
`;
