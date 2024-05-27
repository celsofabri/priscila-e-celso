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
  StyledHelperColors,
  StyledHelperColor
} from './styled';

const Helper = ({ label, description, guide, colors }) => {
  const [isShow, setIsShow] = useState(true);

  return (
    <StyledHelper isShow={isShow}>
      <StyledHelperContainer isShow={isShow}>
        <StyledHelperTitle>{label}</StyledHelperTitle>
        <StyledHelperClose onClick={() => setIsShow(false)}>
          <StyledHelperCloseIcon>-</StyledHelperCloseIcon>
        </StyledHelperClose>
        <StyledHelperContent>
          <p>{description}</p>
          <StyledHelperGuide>
            <p>{guide}</p>
          </StyledHelperGuide>
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
