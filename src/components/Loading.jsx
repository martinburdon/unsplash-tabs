import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  align-items: center;
  background: #2E3440;
  display: flex;
  height: 100vh;
  justify-content: center;
  position: relative;
`;

const Text = styled.p`
  color: #D8DEE9;
  font-size: 1.8rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
`;

export default () => (
  <AppContainer>
    <Text>Loading</Text>
  </AppContainer>
);
