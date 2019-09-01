import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <h2>
          <form>
            <label>
              <input type="text" name="name" placeholder="City" />
              <button
                type="button"
                onClick={() => {
                  this.props.setWeather();
                }}
              >
                Find
              </button>
            </label>
          </form>
        </h2>
      </div>
    );
  }
}
