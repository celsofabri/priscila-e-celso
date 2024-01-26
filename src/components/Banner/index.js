import React, { useState, useEffect } from 'react';
import Loading from 'components/loading';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { StyledWrapper } from 'assets/global/styled';
import {
  StyledBanner,
  StyledImg,
  StyledBannerContent,
  StyledTitle,
  StyledSubtitle,
  StyledDate
} from './styled';
import ImgLogo from 'assets/images/priscila-e-celso-logo.svg';

const Banner = () => {
  const [banner, setBanner] = useState([]);
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

        setBanner(data.bannerCollection.items);
      });
  }, [query]);

  if (banner.length === 0 || !banner) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      {banner.map((item, index) => {
        return (
          <StyledBanner key={index}>
            <StyledWrapper>
              <StyledImg src={item.photo.url} alt={item.title} />
              <StyledBannerContent>
                <StyledSubtitle>{item?.subtitle}</StyledSubtitle>
                <StyledTitle key={index}>
                  <img src={ImgLogo} alt={item.title} />
                </StyledTitle>
                <StyledDate>
                  {format(new Date(item.date), 'dd . MMM . yyyy', {
                    locale: ptBR
                  })}
                </StyledDate>
              </StyledBannerContent>
            </StyledWrapper>
          </StyledBanner>
        );
      })}
    </React.Fragment>
  );
};

export default Banner;
