import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import { StyledWrapper } from 'assets/global/styled';
import {
  StyledStory,
  StyledStoryHeader,
  StyledStoryTitle,
  StyledStorySubtitle,
  StyledStoryContent
} from './styled';

const Story = ({ data }) => {
  const [ourStory, setOurStory] = useState([]);
  const query = `
    {
      pages(id: "3hGTYzE6je3ZUXL0tujc7I") {
        title
        subtitle
        content
      }
    }
  `;

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/bz9d56pnav45/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer OhHLk8PiunfsccpMwzamwzaCPvAA0f0tskhYWoWEoZk'
          },
          body: JSON.stringify({ query })
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setOurStory(data.pages);
      });
  }, [query]);

  return (
    <StyledStory>
      <StyledStoryHeader>
        <StyledWrapper>
          <StyledStoryTitle>{ourStory?.title}</StyledStoryTitle>
          <StyledStorySubtitle>
            {ourStory?.subtitle}
          </StyledStorySubtitle>
        </StyledWrapper>
      </StyledStoryHeader>
      <StyledStoryContent>
        <StyledWrapper>
          <Markdown>{ourStory?.content}</Markdown>
        </StyledWrapper>
      </StyledStoryContent>
    </StyledStory>
  );
};

export default Story;
