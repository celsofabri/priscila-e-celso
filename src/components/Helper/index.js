import React, { useState } from 'react';
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
  const viewportWidth = window.innerWidth;
  const isMobile = (width) => {
    if (width > 768) {
      return true;
    }
    return false;
  };

  const [helper, setHelper] = useState(isMobile(viewportWidth));

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
