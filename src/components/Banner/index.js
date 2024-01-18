import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import {
  StyledBanner,
  StyledImg,
  StyledBannerContent,
  StyledTitle,
  StyledSubtitle,
  StyledDate
} from './styled';
import ImgLogo from '../../images/priscila-e-celso-logo.svg';
import ImgFlower from '../../images/flower.svg';

const Banner = () => {
  const [banner, setBanner] = useState([])
  const query = `
    {
      bannerCollection {
        items {
          title
          subtitle,
          date,
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
          <StyledBanner key={index}>
            <StyledImg src={item.photo.url} alt={item.title} />
            <StyledBannerContent>
              <StyledSubtitle>{item?.subtitle}</StyledSubtitle>
              <StyledTitle key={index}>
                <img src={ImgLogo} alt={item.title}/>
              </StyledTitle>
              <StyledDate>{format(new Date(item.date), 'dd . MM . yyyy')}</StyledDate>
              <img src={ImgFlower} alt="Flores"/>
              </StyledBannerContent>
          </StyledBanner>
        )
      })}
    </React.Fragment>
  );
}

export default Banner;