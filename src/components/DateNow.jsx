import React, { Component } from 'react';
import moment from 'moment';

export default class DateNow extends Component {
  state = {
    dayShortText: '',
    dayLongText: '',
    dayNumber: '',
    ordinalIndicator: '',
    monthShortText: '',
    monthLongText: '',
    monthNumber: '',
    year: ''
  }

  componentDidMount() {
    const dayShortText = moment().format('ddd');
    const dayLongText = moment().format('dddd');
    const dayNumber = moment().format('D');
    const ordinalIndicator = this.getOrdinalIndicator();
    const monthShortText = moment().format('MMM');
    const monthLongText = moment().format('MMMM');
    const monthNumber = moment().format('M');
    const year = moment().format('YYYY');

    this.setState({
      dayShortText,
      dayLongText,
      dayNumber,
      ordinalIndicator,
      monthShortText,
      monthLongText,
      monthNumber,
      year
    });
  }

  getOrdinalIndicator = () => {
    const today = new Date();
    const date = today.getDate();
    const ordinalIndicator = date % 10 === 1 && date !== 11 ? 'st' : (date % 10 === 2 && date !== 12 ? 'nd' : (date % 10 === 3 && date !== 13 ? 'rd' : 'th'));

    return ordinalIndicator;
  }

  render() {
    const {
      dayShortText,
      dayLongText,
      dayNumber,
      ordinalIndicator,
      monthShortText,
      monthLongText,
      monthNumber,
      year
    } = this.state;
    return (
      <>
        {this.props.render({
          dayShortText,
          dayLongText,
          dayNumber,
          ordinalIndicator,
          monthShortText,
          monthLongText,
          monthNumber,
          year
        })}
      </>
    );
  }
}
