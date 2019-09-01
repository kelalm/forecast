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
            <input type="submit" value="View Weather" />
          </form>
        </h2>
      </div>
    );
  }
}
