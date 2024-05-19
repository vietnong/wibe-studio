import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const TimerBlock = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: #f0f0f0;
  border-radius: 5px;
  font-size: 1rem;
  color: #000;

  @media (max-width: 768px) {
    // font-size: 0.7rem;
  }
`;

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-12-21') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <TimerContainer>
      {timeLeft.days > 0 && (
        <TimerBlock>
          {timeLeft.days} {timeLeft.days === 1 ? 'Day' : 'Days'}
        </TimerBlock>
      )}
      {timeLeft.hours > 0 && (
        <TimerBlock>
          {timeLeft.hours} {timeLeft.hours === 1 ? 'Hour' : 'Hours'}
        </TimerBlock>
      )}
      {timeLeft.minutes > 0 && (
        <TimerBlock>
          {timeLeft.minutes} {timeLeft.minutes === 1 ? 'Minute' : 'Minutes'}
        </TimerBlock>
      )}
      {timeLeft.seconds > 0 && (
        <TimerBlock>
          {timeLeft.seconds} {timeLeft.seconds === 1 ? 'Second' : 'Seconds'}
        </TimerBlock>
      )}
    </TimerContainer>
  );
};

export default CountdownTimer;
