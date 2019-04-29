import React, { Component } from 'react';
import styled from 'styled-components';
import SettingsIcon from './SettingsIcon.jsx';
import RefreshIcon from './RefreshIcon.jsx';

const SettingsContainer = styled.div`
  position: relative;
`;

const InputToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  svg {
    display: block;
    fill: #5b667b;
    height: 3rem;
    width: 3rem;
  }
`;

const InputContainer = styled.form`
  position: absolute;
  right: 4rem;
  bottom: 0;
`;

const Input = styled.input`
  background: #434C5E;
  border: none;
  border-radius: 0.4rem;
  color: #D8DEE9;
  font-size: 1.5rem;
  line-height: 1.1;
  padding: 0.8rem 3rem 0.8rem 0.8rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #79849a;
  }
`;

class QuerySelector extends Component {
  state = {
    open: false
  };

  toggleSettings = () => {
    this.setState({
      open: !this.state.open
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.getImage();
  }

  render() {
    return (
      <SettingsContainer>
        <InputToggle onClick={this.toggleSettings}>
          <SettingsIcon />
        </InputToggle>
        {this.state.open &&
          <InputContainer onSubmit={(e) => this.onSubmit(e)}>
            <Input
              id="querySelector"
              placeholder="Enter search term"
              onChange={(e) => this.props.onChange(e.target.value)}
              type="text"
              value={this.props.value}
            />
            <RefreshIcon onClick={this.props.getImage} />
          </InputContainer>
        }
      </SettingsContainer>
    );
  }
};

export default QuerySelector;
