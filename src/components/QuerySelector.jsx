import React, { Component } from 'react';
import styled from 'styled-components';
import SettingsIcon from './SettingsIcon.jsx';

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
    fill: #D8DEE9;
    height: 3rem;
    width: 3rem;
  }
`;

const InputContainer = styled.div`
  position: absolute;
  right: 4rem;
  bottom: 0;
`;

const Input = styled.input`
  background: #D8DEE9;
  border: none;
  border-radius: 0.4rem;
  color: #2E3440;
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
        <InputToggle onClick={this.toggleSettings}>
          <SettingsIcon />
        </InputToggle>
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
