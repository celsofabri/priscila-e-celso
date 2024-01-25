import React, { useState, useEffect } from 'react';
import { format, differenceInMilliseconds } from 'date-fns';
import { StyledWrapper } from 'generic';
import {
  StyledTimer,
  StyledTimerHeader,
  StyledTimerTitle,
  StyledTimerContent,
  StyledTimerClock,
  StyledTimerFooter
} from './styled'

const Timer = () => {
  const targetDate = new Date('2024-12-14T00:00:00');
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining()
  );

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = differenceInMilliseconds(targetDate, now);

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
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
          <blockquote>
            " — Todos os lugares que estive durante minha vida, me
            levaram até você…"
          </blockquote>
        </StyledTimerFooter>
      </StyledWrapper>
    </StyledTimer>
  );
}

export default Timer;