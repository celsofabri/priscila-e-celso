import React, { useState, useEffect } from 'react';
import Header from 'components/Header';

const groomsmenAndBridesmaids = () => {
  const [people, setPeople] = useState([]);
  const query = `
  {
      groomsmenAndBridesmaidsCollection {
        items {
          name
          subtitle
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
    <React.Fragment>
      <Header />
      {people.map((person, index) => {
        return <h3 key={index}>{person.name}</h3>;
      })}
    </React.Fragment>
  );
};

export default groomsmenAndBridesmaids;
