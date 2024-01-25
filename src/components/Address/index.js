import React from 'react';
import { StyledWrapper } from 'assets/global/styled';
import {
  StyledAddress,
  StyledAddressHeader,
  StyledAddressTitle,
  StyledAddressContent,
  StyledAddressPlace,
  StyledAddressInfo
} from './styled';
import ImgVilla from 'assets/images/bg-villa-do-rocio.jpg';

const Address = () => {
  return (
    <StyledAddress>
      <StyledAddressContent>
        <StyledAddressPlace>
          <img src={ImgVilla} alt="Villa do Rocio" />
        </StyledAddressPlace>
        <StyledAddressInfo>
          <StyledAddressTitle>Localização</StyledAddressTitle>
          <h3>Villa do Rocio</h3>
          <address>
            R. José Kuckla, 100 - Juruqui
            <br />
            Almirante Tamandaré - PR, 83507-990
          </address>
          <a
            href="https://maps.app.goo.gl/oPGbms49BXQhRNT6A"
            target="_blank"
            rel="noopener noreferrer"
          >
            Veja como chegar
          </a>
        </StyledAddressInfo>
      </StyledAddressContent>
    </StyledAddress>
  );
};

export default Address;
