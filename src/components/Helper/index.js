import React, { useState, useEffect } from 'react';
import {
  StyledHelper,
  StyledHelperContainer,
  StyledHelperTitle,
  StyledHelperClose,
  StyledHelperCloseIcon,
  StyledHelperOpen,
  StyledHelperOpenIcon,
  StyledHelperContent,
  StyledHelperGuide,
  StyledHelperGuideImage,
  StyledHelperColors,
  StyledHelperColor,
  StyledHelperButton
} from './styled';

const Helper = ({ label, description, guide, colors, image }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const [helper, setHelper] = useState(width > 750 ? true : false);

  return (
    <StyledHelper helper={helper}>
      <StyledHelperContainer helper={helper}>
        {label && <StyledHelperTitle>{label}</StyledHelperTitle>}
        <StyledHelperClose onClick={() => setHelper(false)}>
          <StyledHelperCloseIcon>-</StyledHelperCloseIcon>
        </StyledHelperClose>
        <StyledHelperContent>
          {description && <p>{description}</p>}
          {image && guide && (
            <StyledHelperGuide>
              {image && (
                <StyledHelperGuideImage>
                  <img src={image} alt={label} />
                </StyledHelperGuideImage>
              )}
              {guide && <p>{guide}</p>}
            </StyledHelperGuide>
          )}
          {colors && (
            <StyledHelperColors>
              {colors.map((color, i) => {
                return (
                  <StyledHelperColor
                    key={i}
                    style={{
                      border: `1px solid ${color}`,
                      backgroundColor: color
                    }}
                  ></StyledHelperColor>
                );
              })}
            </StyledHelperColors>
          )}
        </StyledHelperContent>
        <StyledHelperButton onClick={() => setHelper(false)}>
          Ok
        </StyledHelperButton>
      </StyledHelperContainer>
      <StyledHelperOpen
        onClick={() => setHelper(true)}
        helper={helper}
      >
        <StyledHelperOpenIcon>+</StyledHelperOpenIcon>
      </StyledHelperOpen>
    </StyledHelper>
  );
};

export default Helper;
