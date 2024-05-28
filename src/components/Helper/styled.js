import styled, { css } from 'styled-components';
import { colors, fonts } from 'assets/global/tokens';

export const StyledHelper = styled.div`
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: ${(props) => props.helper ? 100 : 48};
  width: auto;
  height: auto;
  padding: 0;
  border: 0;
  border-radius: 4px;
  background-color: transparent;

  ${(props) =>
    props.helper &&
    css`
      display: block;
      width: 480px;
      padding: 16px;
      border: 1px solid ${colors.red500};
      background-color: ${colors.white};
    `}

  @media screen and (max-width: 768px) {
    right: 32px;
    bottom: 32px;
    width: auto;
    height: auto;
    overflow: auto;

    ${(props) =>
      props.helper &&
      css`
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100vh;
      `}
  }
`;

export const StyledHelperContainer = styled.div`
  display: ${(props) => (props.helper ? 'block' : 'none')};
`;

export const StyledHelperTitle = styled.h4`
  margin: 0;
  font-family: ${fonts.secondary};
  font-size: 48px;
  color: ${colors.blue700};

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const StyledHelperClose = styled.button`
  position: absolute;
  top: -12px;
  right: -12px;
  z-index: 101;
  display: ${(props) => (props.helper ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background-color: ${colors.red500};
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledHelperCloseIcon = styled.span`
  font-size: 24px;
  color: ${colors.white};
`;

export const StyledHelperOpen = styled.button`
  display: ${(props) => (props.helper ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) =>
    props.helper ? 'transparent' : `${colors.red500}`};
  cursor: pointer;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const StyledHelperOpenIcon = styled.span`
  font-size: 48px;
  color: ${colors.white};
`;

export const StyledHelperContent = styled.div`
  font-size: 14px;
`;

export const StyledHelperGuide = styled.div`
  font-weight: 700;
  font-style: italic;

  img {
    width: auto;
    max-height: 250px;
    margin: 0 auto;

    @media (min-width: 768px) and (max-height: 750px) {
      display: none;
    }
  }
`;

export const StyledHelperGuideImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledHelperColors = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: -8px;
`;

export const StyledHelperColor = styled.div`
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin: 8px;
  -webkit-box-shadow: inset 0px 0px 0px 2px ${colors.white};
  -moz-box-shadow: inset 0px 0px 0px 2px ${colors.white};
  box-shadow: inset 0px 0px 0px 2px ${colors.white};
`;

export const StyledHelperButton = styled.button`
  display: block;
  width: 150px;
  margin-top: 32px;
  padding: 16px;
  font-size: 12px;
  color: ${colors.white};
  text-decoration: none;
  text-transform: uppercase;
  background-color: ${colors.red500};
  border: none;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${colors.white};
    background-color: ${colors.blue700};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
