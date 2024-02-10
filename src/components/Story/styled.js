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

  h1 {
    padding-left: 16px;
    font-family: ${fonts.secondary};
    font-size: 48px;
    border-left: 5px solid ${colors.red500};
  }

  h2 {
    color: ${colors.red500};
  }

  img {
    display: block;
    max-width: 80%;
    height: auto;
    margin: 0 auto;
  }

  blockquote {
    padding-left: 16px;
    font-family: ${fonts.secondary};
    font-size: 24px;
    border-left: 5px solid ${colors.blue700};
  }
`;
