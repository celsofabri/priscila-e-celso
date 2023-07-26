import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [banner, setBanner] = useState([])
  const query = `
    {
      bannerCollection {
        items {
          title
          subtitle,
          photo {
            url
            width
            height
            size
            title
          }
        }
      }
    }
  `;

  console.log('debug', query)
  console.log('banner', banner)

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/bz9d56pnav45/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer OhHLk8PiunfsccpMwzamwzaCPvAA0f0tskhYWoWEoZk',
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setBanner(data.bannerCollection.items);
      });
    }, 
  [query]);

  if (banner.length === 0 || !banner) {
    return 'Carregando...'
  }

  return(
    <React.Fragment>
      {banner.map((item, index) => {
        return(
          <div key={index}>
            <img src={item.photo.url} alt={item?.title || 'Priscila & Celso'} />
            <h3 key={index}>{item?.title || 'Priscila & Celso'}</h3>
            <h4>{item?.subtitle || 'Eu pertenço a você, você pertence a mim...'}</h4>
          </div>
        )
      })}
    </React.Fragment>
  );
}

export default Banner;