import styled from 'styled-components';
import { colors, fonts } from 'assets/global/tokens';

export const StyledHelper = styled.div`
  position: fixed;
  right: 32px;
  bottom: 32px;
  z-index: 10;
  width: ${(props) => (props.isShow ? '350px' : 'auto')};
  height: auto;
  padding: ${(props) => (props.isShow ? '16px' : '0')};
  border: ${(props) =>
    props.isShow ? `1px solid ${colors.red500}` : '0'};
  border-radius: 4px;
  background-color: ${(props) =>
    props.isShow ? `${colors.white}` : 'transparent'};
`;

export const StyledHelperContainer = styled.div`
  display: ${(props) => (props.isShow ? 'block' : 'none')};
`;

export const StyledHelperTitle = styled.h4`
  font-family: ${fonts.secondary};
  font-size: 24px;
  color: ${colors.red500};
  margin: 0;
`;

export const StyledHelperClose = styled.button`
  position: absolute;
  top: -12px;
  right: -12px;
  z-index: 11;
  display: ${(props) => (props.isShow ? 'none' : 'block')};
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  background-color: ${colors.red500};
  cursor: pointer;
`;

export const StyledHelperCloseIcon = styled.span`
  display: block;
  width: 100%;
  height: 3px;
  background-color: ${colors.white};

  &:nth-child(2) {
    width: 3px;
    height: 100%;
  }
`;

export const StyledHelperOpen = styled.button`
  display: ${(props) => (props.isShow ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isShow ? 'transparent' : `${colors.red500}`};
  cursor: pointer;
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
  -webkit-box-shadow: inset 0px 0px 0px 2px #ffffff;
  -moz-box-shadow: inset 0px 0px 0px 2px #ffffff;
  box-shadow: inset 0px 0px 0px 2px #ffffff;
`;
