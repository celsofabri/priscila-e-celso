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
  StyledHelperColors,
  StyledHelperColor
} from './styled';

const Helper = ({ label, description, guide, colors, image }) => {
  const [isShow, setIsShow] = useState(true);

  return (
    <StyledHelper isShow={isShow}>
      <StyledHelperContainer isShow={isShow}>
        {label && <StyledHelperTitle>{label}</StyledHelperTitle>}
        <StyledHelperClose onClick={() => setIsShow(false)}>
          <StyledHelperCloseIcon>-</StyledHelperCloseIcon>
        </StyledHelperClose>
        <StyledHelperContent>
          {description && <p>{description}</p>}
          {image && guide && (
            <StyledHelperGuide>
              {image && <img src={image} alt={label} />}
              {guide && <p>{guide}</p>}
            </StyledHelperGuide>
          )}
          {colors && (
            <StyledHelperColors>
              {colors.map((color) => {
                return (
                  <StyledHelperColor
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
      </StyledHelperContainer>
      <StyledHelperOpen
        onClick={() => setIsShow(true)}
        isShow={isShow}
      >
        <StyledHelperOpenIcon>+</StyledHelperOpenIcon>
      </StyledHelperOpen>
    </StyledHelper>
  );
};

export default Helper;
