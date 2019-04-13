import React, { Component } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import styled from 'styled-components';
import unsplashLogo from './assets/unsplash-logo.png';
import QuerySelector from './components/QuerySelector.jsx';
import Author from './components/Author.jsx';
import { getFakeData } from './helpers.js';

const AppContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  position: relative;

  &::after {
    background: linear-gradient(to top, rgba(0,0,0,0.80) 0%,rgba(0,0,0,0) 100%);
    content: '';
    width: 100vw;
    height: 10rem;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const UnsplashContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  margin-left: -8rem;
  z-index: 1;
  width: 16rem;

  p {
    color: #fff;
    text-align: center;
    margin-bottom: 0.4rem;
  }

  img {
    height: auto;
    max-width: 100%;
    display: block;
  }
`;

class App extends Component {
  state = {
    query: '',
    imageData: false
  };

  componentDidMount() {
    const existingQuery = localStorage.getItem('unsplash-query');
    if (existingQuery) {
      this.setState({
        query: existingQuery
      }, () => {
        this.getImage();
      })
    } else {
      // this.getImage();
      this.setState({ imageData: getFakeData() })
    }
  }

  getImage = () => {
    const unsplash = new Unsplash({
      applicationId: "6065459990db35f7155affdc49fcbe8400bf62e55b8d1e1fc0eac0dc6dab5368",
      secret: "472798bcebb71460c75a0793eb30c3bd837e24f31f469b812c6e69253825026d"
    });

    const params = {
      query: this.state.query,
      orientation: 'landscape'
    };

    unsplash.photos.getRandomPhoto(params)
    .then(toJson)
    .then(imageData => {
      console.log(':: imageData ', imageData);
      if (!imageData.errors) {
        this.setState({ imageData })
      } else {
        this.setState({ imageData: getFakeData() })
      }
    })
  }

  onQueryChange = (query) => {
    this.setState({ query });
    localStorage.setItem('unsplash-query', query);
  }

  render() {
    const { imageData } = this.state;
    if (!imageData) return 'Loading...';

    const { user } = imageData;

    return (
      <AppContainer>
        <QuerySelector
          onChange={this.onQueryChange}
          value={this.state.query}
        />
        <Author {...user} />
        <UnsplashContainer>
          <img src={unsplashLogo} alt="Logo" />;
          <p>Image available from Unsplash</p>
        </UnsplashContainer>
        <Image
          src={imageData.urls.regular}
          alt={imageData.alt_description}
        />
      </AppContainer>
    );
  }
}

export default App;
