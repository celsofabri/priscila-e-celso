import React from 'react';
import { StyledWrapper } from 'generic';
import {
  StyledStory,
  StyledStoryHeader,
  StyledStoryTitle,
  StyledStoryContent
} from './styled';

const Story = () => {

  return(
    <StyledStory>
      <StyledStoryHeader>
        <StyledWrapper>
          <StyledStoryTitle>Nossa História</StyledStoryTitle>
          </StyledWrapper>
      </StyledStoryHeader>
      <StyledStoryContent>
        <StyledWrapper>
          Aqui vem um texto.
        </StyledWrapper>
      </StyledStoryContent>
    </StyledStory>
  );
}

export default Story;