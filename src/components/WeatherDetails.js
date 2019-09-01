import React, { Component } from "react";

export default class WeatherDetails extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.city}</h4>
        <h1>{Math.round(this.props.temperature)}°F</h1>
        <h2>{this.props.conditions}</h2>
      </div>
    );
  }
}
