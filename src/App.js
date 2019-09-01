import React, { Component } from "react";

import "./App.css";

import { MoonLoader } from "react-spinners";

import Header from "./components/Header";
import Card from "./components/Card";
import WeatherDetails from "./components/WeatherDetails";

class App extends Component {
  state = {
    searchBarInput: "",
    weatherDetails: {
      temperature: "",
      description: ""
    },
    loading: false,
    error: false
  };

  searchBarHandler = e => {
    this.setState({
      searchBarInput: e.target.value
    });
  };

  setWeather = () => {
    console.log("Setting weather");
    const city = this.state.searchBarInput;
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    this.setState({ weatherDetails: {}, loading: true, error: false }, () => {
      // callback function
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main className="card">
          {/* <SearchBar /> */}
          <WeatherDetails />
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
