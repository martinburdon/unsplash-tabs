import React, { Component } from 'react';

export default class Clock extends Component {
  state = {
    hour: 0,
    minutes: 0,
    seconds: 0,
    isLoading: true
  };

  componentDidMount() {
    this.setupClock();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setupClock = () => {
    this.interval = setInterval(() => this.updateTime(), 1000);
  }

  updateTime = () => {
    const now = new Date();
    const hour = this.formatNumber(now.getHours());
    const minutes = this.formatNumber(now.getMinutes());
    const seconds = this.formatNumber(now.getSeconds());
    this.setState({ hour, minutes, seconds, isLoading: false });
  }

  formatNumber = (number) => {
    return (`0${number}`).slice(-2);
  }

  // Render props example: https://levelup.gitconnected.com/understanding-react-render-props-by-example-71f2162fd0f2
  render() {
    return (
      <>
        {this.props.render({
          hour: this.state.hour,
          minutes: this.state.minutes,
          seconds: this.state.seconds,
          isLoading: this.state.isLoading
        })}
      </>
    )
  }
}
