import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <h2>
          <form
            onSubmit={e => {
              e.preventDefault();
              this.props.setWeather();
            }}
          >
            <label>
              <input
                type="text"
                name="name"
                placeholder="City"
                id="search-bar"
              />
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
