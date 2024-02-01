import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import { StyledWrapper } from 'assets/global/styled';
import {
  StyledFamily,
  StyledFamilyHeader,
  StyledFamilyTitle,
  StyledFamilySubtitle,
  StyledFamilyContent,
  StyledFamilyBox,
  StyledFamilyCover,
  StyledFamilyName,
  StyledFamilyRelationship,
  StyledFamilyDetail,
  StyledFamilyPhoto,
  StyledFamilyText
} from './styled';

const Family = ({ data }) => {
  const [ourFamilyPage, setOurFamilyPage] = useState([]);
  const [ourFamily, setOurFamily] = useState([]);
  const [ourFamilyByCategory, setOurFamilyByCategory] = useState([]);
  const query = `
    {
      pages(id: "nPHtCWVZYJNcfcqE6iVH7") {
        title
        subtitle
        content
      }
      familyCollection {
        items {
          name
          relationship
          photo {
            url
          }
          details
        }
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

        setOurFamilyPage(data.pages);
        setOurFamily(data.familyCollection.items)
      });
  }, [query]);

  return (
    <StyledFamily>
      <StyledFamilyHeader>
        <StyledWrapper>
          <StyledFamilyTitle>{ourFamilyPage.title}</StyledFamilyTitle>
          <StyledFamilySubtitle>
            {ourFamilyPage.subtitle}
          </StyledFamilySubtitle>
        </StyledWrapper>
      </StyledFamilyHeader>
      <StyledFamilyContent>
        <StyledWrapper>
          <Markdown>{ourFamilyPage.content}</Markdown>
          {ourFamily.map((family, index) => {

            return (
              <StyledFamilyBox key={index}>
                <StyledFamilyCover>
                    <StyledFamilyName>{family.name}</StyledFamilyName>
                    <StyledFamilyRelationship>{family.relationship}</StyledFamilyRelationship>
                </StyledFamilyCover>
                <StyledFamilyDetail>
                  <StyledFamilyPhoto>
                    <img src={family.photo.url} />
                  </StyledFamilyPhoto>
                  <StyledFamilyText>
                    <Markdown>{family.details}</Markdown>
                  </StyledFamilyText>
                </StyledFamilyDetail>
              </StyledFamilyBox>
            )
          })}
        </StyledWrapper>
      </StyledFamilyContent>
    </StyledFamily>
  );
};

export default Family;
