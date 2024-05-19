import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const TimerBlock = styled.div`
color: #000;
  margin: 0.2rem;
  padding: 0.3rem;
  background-color: #f0f0f0;
  border-radius: 5px;
  font-size: 1rem;
  display: flex;
  flex-direction: column; /* Hiển thị các phần tử theo chiều dọc */
  align-items: center; /* Căn chỉnh các phần tử theo chiều ngang */
`;

const TimeValue = styled.p`
  font-size: 1rem; /* Điều chỉnh kích thước font của giá trị thời gian */
  margin: 0; /* Xóa bỏ khoảng cách mặc định */
`;

const TimeLabel = styled.p`
  font-size: 1rem; /* Điều chỉnh kích thước font của nhãn thời gian */
  margin: 0; /* Xóa bỏ khoảng cách mặc định */
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
          <TimeValue>{timeLeft.days}</TimeValue>
          &nbsp;
          <TimeLabel>Days</TimeLabel>
        </TimerBlock>
      )}
      {timeLeft.hours > 0 && (
        <TimerBlock>
          <TimeValue>{timeLeft.hours}</TimeValue>
          &nbsp;
          <TimeLabel>Hours</TimeLabel>
        </TimerBlock>
      )}
      {timeLeft.minutes > 0 && (
        <TimerBlock>
          <TimeValue>{timeLeft.minutes}</TimeValue>
          &nbsp;
          <TimeLabel>Minutes</TimeLabel>
        </TimerBlock>
      )}
      
        <TimerBlock>
          <TimeValue>{timeLeft.seconds}</TimeValue>
          &nbsp;
          <TimeLabel>Seconds</TimeLabel>
        </TimerBlock>
      
    </TimerContainer>
  );
};

export default CountdownTimer;
