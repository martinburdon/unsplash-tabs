import React from 'react';
import UnsplashLogo from './UnsplashLogo.jsx';
import QuerySelector from './QuerySelector.jsx';
import Author from './Author.jsx';
import styled from 'styled-components';

const Footer = styled.div`
  align-items: center;
  background: #2E3440;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export default ({
  getImage,
  onQueryChange,
  query,
  user
}) => (
  <Footer>
    <Author {...user} />
    <UnsplashLogo />
    <QuerySelector
      getImage={getImage}
      onChange={onQueryChange}
      value={query}
    />
  </Footer>
);
