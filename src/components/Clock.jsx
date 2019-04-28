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

  setupClock() {
    this.interval = setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    const hour = this.formatNumber(now.getHours());
    const minutes = this.formatNumber(now.getMinutes());
    const seconds = this.formatNumber(now.getSeconds());
    this.setState({ hour, minutes, seconds, isLoading: false });
  }

  formatNumber(number) {
    return (`0${number}`).slice(-2);
  }

  getClock() {
    const { hour, minutes, seconds, isLoading } = this.state;
    if (!isLoading) {
      return <div>{hour}:{minutes}:{seconds}</div>;
    }

    return null;
  }

  render() {
    return this.getClock();
  }
}
