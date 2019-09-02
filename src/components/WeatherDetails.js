import React, { Component } from "react";

import { ReactComponent as DefaultImage } from "../assets/images/Preview.svg";
import { ReactComponent as Clear } from "../assets/images/Clear.svg";

export default class WeatherDetails extends Component {
  render() {
    var conditionsText = this.props.conditions;
    conditionsText = conditionsText
      .toLowerCase()
      .split(" ")
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");

    let conditionImage = <DefaultImage />;

    if (conditionsText === "Clear Sky") {
      conditionImage = <Clear />;
    }
    return (
      <div>
        <h4>{this.props.city}</h4>
        <h1>{Math.round(this.props.temperature)}°F</h1>
        <h2>{conditionsText}</h2>
        {conditionImage}
      </div>
    );
  }
}
