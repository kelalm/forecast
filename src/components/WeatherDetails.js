import React, { Component } from "react";

export default class WeatherDetails extends Component {
  state = {
    city: "",
    country: "",
    temperature: "",
    conditions: "",
    date: ""
  };

  render() {
    return (
      <div>
        <h1>City</h1>
        <h2>Country</h2>
        <h3>Temperature</h3>
        <h3>Conditions</h3>
        <h3>Date and Local Time</h3>
      </div>
    );
  }
}
