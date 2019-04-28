import React from 'react';
import styled from 'styled-components';
import DateNow from './DateNow.jsx';
import Clock from './Clock.jsx';

const Container = styled.div`
  background: #2E3440;
  border-radius: 0.4rem;
  color: #D8DEE9;
  left: 0;
  margin: 2rem;
  padding: 2rem;
  position: absolute;
  top: 0;
`;

const DateText = styled.p`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

const TimeText = styled.p`
  font-size: 1.6rem;
`;

export default () => {
  return (
    <Container>
      <DateNow render={({
        dayLongText,
        dayNumber,
        ordinalIndicator,
        monthLongText,
        year
      }) => (
        <DateText>{`${dayLongText} ${dayNumber}${ordinalIndicator} ${monthLongText}, ${year}`}</DateText>
      )}/>
      <Clock render={({
        hour,
        minutes
      }) => (
        <TimeText>{`${hour}:${minutes}`}</TimeText>
      )} />
    </Container>
  );
}
