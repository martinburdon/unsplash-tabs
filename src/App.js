import React, { Component } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import styled from 'styled-components';
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

const Button = styled.button`
  position: absolute;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      imageData: false
    };
    this.getImage = this.getImage.bind(this);
    this.onQueryChange = this.onQueryChange.bind(this);
  }

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

  getImage() {
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
      this.setState({ imageData })
    })
  }

  onQueryChange(query) {
    console.log(':: e ', query);
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
        <Button onClick={this.getImage}>New Image</Button>
        <Author {...user} />
        <Image src={imageData.urls.regular} alt={imageData.alt_description} />
      </AppContainer>
    );
  }
}

export default App;
