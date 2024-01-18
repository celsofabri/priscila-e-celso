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
  StyledTimerFooter,
  StyledAddress,
  StyledAddressHeader,
  StyledAddressTitle,
  StyledAddressContent,
  StyledAddressInfo,
  StyledFooter,
  StyledFooterContainer,
  StyledFooterLogo,
  StyledFooterMenu,
  StyledFooterCategory,
  StyledFooterList,
  StyledFooterItem,
  StyledFooterAnchor
} from 'generic.js';
import ImgLogo from 'assets/images/priscila-e-celso-logo.svg';
import ImgRings from 'assets/images/rings.svg';
import ImgCheers from 'assets/images/cheers.svg';

const Home = () => {
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
    <React.Fragment>
      <Banner />

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
              celebrar com a gente! Aqui está uma prévia do que está
              por vir.
            </p>
          </StyledScheduleHeader>
          <StyledScheduleContent>
            <StyledScheduleItem>
              <img src={ImgRings} alt="Alianças" />
              <StyledScheduleItemTitle>
                Sábado, 7 de Dezembro
              </StyledScheduleItemTitle>
              <p>
                O dia de nossa união! Recém-casados no cartório com
                pais e familiares.
              </p>
            </StyledScheduleItem>
            <StyledScheduleItem>
              <img src={ImgCheers} alt="Brinde" />
              <StyledScheduleItemTitle>
                Sábado, 14 de Dezembro
              </StyledScheduleItemTitle>
              <p>
                O nosso grande dia! Não há forma melhor do que
                celebrar o nosso amor com amigos e família!
              </p>
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
            <blockquote>
              " — Todos os lugares que estive durante minha vida, me
              levaram até você…"
            </blockquote>
          </StyledTimerFooter>
        </StyledWrapper>
      </StyledTimer>

      <StyledAddress>
        <StyledWrapper>
          <StyledAddressHeader>
            <StyledAddressTitle>Localização</StyledAddressTitle>
          </StyledAddressHeader>
          <StyledAddressContent>
            <StyledAddressInfo>
              <h3>Villa do Rocio</h3>
              <address>
                R. José Kuckla, 100 - Juruqui<br/>
                Almirante Tamandaré - PR, 83507-990
              </address>
              <a 
                href="https://maps.app.goo.gl/oPGbms49BXQhRNT6A"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ver mapa
              </a>
            </StyledAddressInfo>
          </StyledAddressContent>
        </StyledWrapper>
      </StyledAddress>

      <StyledFooter>
        <StyledWrapper>
          <StyledFooterContainer>
          <StyledFooterLogo>
            <img src={ImgLogo} alt="Priscila & Celso" />
          </StyledFooterLogo>
          <StyledFooterMenu>
              <StyledFooterCategory>Casamento</StyledFooterCategory>
              <StyledFooterList>
                <StyledFooterItem>
                  <StyledFooterAnchor 
                      href="#"
                      title="Confirme sua presença"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                        Padrinhos & Madrinhas
                    </StyledFooterAnchor>
                </StyledFooterItem>
                <StyledFooterItem>
                  <StyledFooterAnchor 
                    href="#"
                    title="Confirme sua presença"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                      Confirme sua presença
                  </StyledFooterAnchor>
                </StyledFooterItem>
                <StyledFooterItem>
                  <StyledFooterAnchor 
                    href="#"
                    title="Como chegar no evento?"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                      Como chegar no evento?
                  </StyledFooterAnchor>
                </StyledFooterItem>
              </StyledFooterList>
            </StyledFooterMenu>
            <StyledFooterMenu>
              <StyledFooterCategory>Lista de Presentes</StyledFooterCategory>
              <StyledFooterList>
                <StyledFooterItem>
                  <StyledFooterAnchor 
                    href="#"
                    title="Camicado"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Camicado
                  </StyledFooterAnchor>
                </StyledFooterItem>
                <StyledFooterItem>
                  <StyledFooterAnchor 
                    href="#"
                    title="TokStok"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    TokStok
                  </StyledFooterAnchor>
                </StyledFooterItem>
                <StyledFooterItem>
                  <StyledFooterAnchor 
                    href="#"
                    title="Magazine Luiza"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Magazine Luiza
                  </StyledFooterAnchor>
                </StyledFooterItem>
              </StyledFooterList>
            </StyledFooterMenu>
          </StyledFooterContainer>
        </StyledWrapper>
      </StyledFooter>
    </React.Fragment>
  );
};

export default Home;

export const Head = () => <title>Casamento Priscila & Celso</title>;
