import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.a`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 50%;
  margin-left: -6.5rem;
  position: absolute;
  text-decoration: none;
  width: 13rem;
`;

const Logo = styled.svg`
  fill: #5b667b;
  height: 2rem;
  margin-bottom: 0.6rem;
  width: 2rem;
`;

const Text = styled.p`
  color: #7b879e;
  font-size: 1rem;
`;

export default () => (
  <LogoContainer href="https://unsplash.com?utm_source=New_Tab_Photos&utm_medium=referral" target="_blank">
    <Logo className="_2m4hn" version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-labelledby="unsplash" aria-hidden="false"><title id="unsplash">Unsplash</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></Logo>
    <Text>Images provided by Unsplash</Text>
  </LogoContainer>
);
