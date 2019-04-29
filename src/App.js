import React, { Component } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import styled from 'styled-components';
import { getFakeData } from './helpers.js';
import DateTime from './components/DateTime.jsx';
import Footer from './components/Footer.jsx';
import Loading from './components/Loading.jsx';

const AppContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  position: relative;
`;

const ImageLink = styled.a`
  cursor: pointer;
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
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
      this.setState({ imageData: getFakeData() }) // Temp for testing
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
    });
  }

  onQueryChange = (query) => {
    this.setState({ query });
    localStorage.setItem('unsplash-query', query);
  }

  render() {
    const { imageData } = this.state;
    if (!imageData) return <Loading />;

    const { links, user } = imageData;

    return (
      <AppContainer>
        <DateTime />
        <Footer
          getImage={this.getImage}
          onQueryChange={this.onQueryChange}
          query={this.state.query}
          user={user}
        />
        <ImageLink href={`${links.html}?utm_source=New_Tab_Photos&utm_medium=referral`} target="_blank">
          <Image
            src={imageData.urls.regular}
            alt={imageData.alt_description}
          />
        </ImageLink>
      </AppContainer>
    );
  }
}

export default App;
