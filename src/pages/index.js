import React, { useState, useEffect } from 'react';
import Banner from 'components/Banner';
import { format, differenceInMilliseconds } from 'date-fns';
import {
  StyledWrapper,
  StyledSchedule,
  StyledScheduleHeader,
  StyledScheduleSubtitle,
  StyledScheduleTitle,
  StyledScheduleContent,
  StyledScheduleItem,
  StyledScheduleItemTitle,
  StyledTimer,
  StyledTimerHeader,
  StyledTimerTitle,
  StyledTimerContent,
  StyledTimerClock,
  StyledTimerFooter
} from 'generic.js'
import ImgRings from 'assets/images/rings.svg';
import ImgCheers from 'assets/images/cheers.svg';


const Home = () => {

  const targetDate = new Date('2024-12-14T00:00:00');
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = differenceInMilliseconds(targetDate, now);

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      // Se a data alvo já passou, retornar zeros
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <React.Fragment>
      <Banner />

      <StyledSchedule>
        <StyledWrapper>
          <StyledScheduleHeader>
            <StyledScheduleSubtitle>O amor está no ar</StyledScheduleSubtitle>
            <StyledScheduleTitle>e isso é só o começo</StyledScheduleTitle>
            <p>Você está convidado para nossa cerimônia de casamento e celebrar com a gente! Aqui está uma prévia do que está por vir.</p>
          </StyledScheduleHeader>
          <StyledScheduleContent>
            <StyledScheduleItem>
              <img src={ImgRings} alt="Alianças" />
              <StyledScheduleItemTitle>Sexta-Feira, 13 de Dezembro</StyledScheduleItemTitle>
              <p>O dia de nossa união! Recém-casados no cartório com pais e familiares.</p>
            </StyledScheduleItem>
            <StyledScheduleItem>
              <img src={ImgCheers} alt="Brinde" />
              <StyledScheduleItemTitle>Sábado, 14 de Dezembro</StyledScheduleItemTitle>
              <p>O nosso grande dia! Não há forma melhor do que celebrar o nosso amor com amigos e família!</p>
            </StyledScheduleItem>
          </StyledScheduleContent>
        </StyledWrapper>
      </StyledSchedule>

      <StyledTimer>
        <StyledWrapper>
          <StyledTimerHeader>
            <StyledTimerTitle>faltam apenas</StyledTimerTitle>
          </StyledTimerHeader>
          <StyledTimerContent>
            <StyledTimerClock>
              <h4>{timeRemaining.days}</h4>
              <p>Dias</p>
            </StyledTimerClock>
            <StyledTimerClock>
              <h4>{timeRemaining.hours}</h4>
              <p>Horas</p>
            </StyledTimerClock>
            <StyledTimerClock>
              <h4>{timeRemaining.minutes}</h4>
              <p>Minutos</p>
            </StyledTimerClock>
            <StyledTimerClock>
              <h4>{timeRemaining.seconds}</h4>
              <p>Segundos</p>
            </StyledTimerClock>
          </StyledTimerContent>
          <StyledTimerFooter>
            <blockquote>" — Todos os lugares que estive durante minha vida, me levaram até você…"</blockquote>
          </StyledTimerFooter>
        </StyledWrapper>
      </StyledTimer>
    </React.Fragment>
  )
}

export default Home;

export const Head = () => <title>Casamento Priscila & Celso</title>
