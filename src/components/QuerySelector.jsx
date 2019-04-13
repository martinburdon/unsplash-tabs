import React, { Component } from 'react';
import styled from 'styled-components';

const SettingsContainer = styled.div`
  bottom: 1rem;
  position: absolute;
  right: 1rem;
  z-index: 1;
`;

const InputToggle = styled.button`
  background: #1b1b1b;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  padding: 1rem;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }
`;

const InputContainer = styled.div`
  position: absolute;
  right: 9rem;
  bottom: 0;
`;

const Input = styled.input`
  background: #1b1b1b;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  line-height: 1.1;
  padding: 0.8rem;

  &:focus {
    outline: none;
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

  render() {
    return (
      <SettingsContainer>
        <InputToggle onClick={this.toggleSettings}>Settings</InputToggle>
        {this.state.open &&
          <InputContainer>
            <Input
              id="querySelector"
              placeholder="Enter search term"
              onChange={(e) => this.props.onChange(e.target.value)}
              type="text"
              value={this.props.value}
            />
          </InputContainer>
        }
      </SettingsContainer>
    );
  }
};

export default QuerySelector;
