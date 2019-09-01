import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <h2>
          <form>
            <label>
              <input type="text" name="name" placeholder="City" />
            </label>
            <button
              type="button"
              onClick={() => {
                this.props.setWeather();
              }}
            >
              Find
            </button>
          </form>
        </h2>
      </div>
    );
  }
}
