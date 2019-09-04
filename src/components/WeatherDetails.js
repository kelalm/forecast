import React, { Component } from "react";

import { ReactComponent as DefaultImage } from "../assets/images/Preview.svg";
import { ReactComponent as Clear } from "../assets/images/Clear.svg";
import { ReactComponent as Rain } from "../assets/images/Rain.svg";
import { ReactComponent as Clouds } from "../assets/images/Clouds.svg";

export default class WeatherDetails extends Component {
  render() {
    var conditionsText = this.props.conditions;
    conditionsText = conditionsText
      .toLowerCase()
      .split(" ")
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");

    let conditionImage = <DefaultImage />;

    if (conditionsText.toLowerCase().includes("clear")) {
      conditionImage = <Clear />;
    } else if (conditionsText.toLowerCase().includes("rain")) {
      conditionImage = <Rain />;
    } else if (conditionsText.toLowerCase().includes("cloud")) {
      conditionImage = <Clouds />;
    }

    return (
      <div className="infoLabels">
        <p className="cityLabel">{this.props.city}</p>
        <p className="temperatureLabel">
          {Math.round(this.props.temperature)}°F
        </p>
        <p className="conditionsLabel">{conditionsText}</p>
        <div className="imageBox">{conditionImage}</div>
      </div>
    );
  }
}
