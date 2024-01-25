import React from 'react';
import { StyledWrapper } from 'assets/global/styled';
import {
  StyledSchedule,
  StyledScheduleHeader,
  StyledScheduleSubtitle,
  StyledScheduleTitle,
  StyledScheduleContent,
  StyledScheduleItem,
  StyledScheduleItemTitle
} from './styled';
import ImgRings from 'assets/images/rings.svg';
import ImgCheers from 'assets/images/cheers.svg';

const Schedule = () => {
  return (
    <StyledSchedule>
      <StyledWrapper>
        <StyledScheduleHeader>
          <StyledScheduleSubtitle>
            O amor está no ar
          </StyledScheduleSubtitle>
          <StyledScheduleTitle>
            e isso é só o começo
          </StyledScheduleTitle>
          <p>
            Você está convidado para nossa cerimônia de casamento e
            celebrar com a gente! Aqui está uma prévia do que está por
            vir.
          </p>
        </StyledScheduleHeader>
        <StyledScheduleContent>
          <StyledScheduleItem>
            <img src={ImgRings} alt="Alianças" />
            <StyledScheduleItemTitle>
              Sábado, 7 de Dezembro
            </StyledScheduleItemTitle>
            <p>
              O dia de nossa união! Recém-casados no cartório com pais
              e familiares.
            </p>
          </StyledScheduleItem>
          <StyledScheduleItem>
            <img src={ImgCheers} alt="Brinde" />
            <StyledScheduleItemTitle>
              Sábado, 14 de Dezembro
            </StyledScheduleItemTitle>
            <p>
              O nosso grande dia! Não há forma melhor do que celebrar
              o nosso amor com amigos e família!
            </p>
          </StyledScheduleItem>
        </StyledScheduleContent>
      </StyledWrapper>
    </StyledSchedule>
  );
};

export default Schedule;
