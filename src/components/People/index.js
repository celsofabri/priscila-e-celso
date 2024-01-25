import React, { useState, useEffect } from 'react';
import { StyledWrapper } from 'assets/global/styled';
import {
  StyledPeople,
  StyledPeopleHeader,
  StyledPeopleTitle,
  StyledPeopleContainer,
  StyledPeopleBox,
  StyledPeoplePhoto,
  StyledPeopleInfo,
  StyledPeopleName,
  StyledPeopleDetails
} from './styled';
import ImgGroomsmenAndBridesmaids from 'assets/images/img-default-padrinhos-madrinhas.jpg';

const People = () => {
  const [people, setPeople] = useState([]);
  const query = `
  {
      groomsmenAndBridesmaidsCollection {
        items {
          name
          description
          photo {
            url
          }
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

        setPeople(data.groomsmenAndBridesmaidsCollection.items);
      });
  }, [query]);

  if (people.length === 0 || !people) {
    return 'Carregando...';
  }

  return (
    <StyledPeople>
      <StyledPeopleHeader>
        <StyledWrapper>
          <StyledPeopleTitle>Padrinhos & Madrinhas</StyledPeopleTitle>
        </StyledWrapper>
      </StyledPeopleHeader>
      <StyledPeopleContainer>
        <StyledWrapper>
          {people.map((person, index) => {
            return (
              <StyledPeopleBox key={index}>
                <StyledPeoplePhoto>
                  <img src={person.photo.url} alt={person.name} />
                </StyledPeoplePhoto>
                <StyledPeopleInfo>
                  <StyledPeopleName>{person.name}</StyledPeopleName>
                  <StyledPeopleDetails>
                    {person.description}
                  </StyledPeopleDetails>
                </StyledPeopleInfo>
              </StyledPeopleBox>
            );
          })}
        </StyledWrapper>
      </StyledPeopleContainer>
    </StyledPeople>
  );
};

export default People;
