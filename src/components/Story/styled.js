import styled from 'styled-components';
import { fonts, colors } from 'assets/global/tokens';

export const StyledStory = styled.section`
  padding: 50px 0;
`;

export const StyledStoryHeader = styled.header`
  margin-bottom: 32px;
`;

export const StyledStoryTitle = styled.h2`
  margin: 0;
  font-family: ${fonts.secondary};
  font-size: 48px;
  color: ${colors.blue700};

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const StyledStorySubtitle = styled.h3`
  margin-top: 0;
  font-family: ${fonts.secondary};
  font-weight: 100;
  font-size: 24px;
  color: ${colors.red500};
`;

export const StyledStoryContent = styled.main`
  display: block;

  img {
    max-width: 100%;
    height: auto;
  }
`;
