import React, { Component } from "react";

import "./App.css";

import { SyncLoader } from "react-spinners";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherDetails from "./components/WeatherDetails";
import DefaultContent from "./components/DefaultContent";
import ErrorDisplay from "./components/ErrorDisplay";

class App extends Component {
  state = {
    searchBarInput: "",
    city: "",
    temperature: "",
    conditions: "",
    date: "",
    loading: false,
    error: false
  };

  searchBarHandler = e => {
    this.setState({
      searchBarInput: e.target.value
    });
  };

  setWeather = e => {
    console.log("Setting weather");
    const city = document.getElementsByName("name")[0].value;
    document.getElementsByName("name")[0].value = "";
    console.log(`Setting city to ${city}`);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;
    this.setState({ weatherDetails: {}, loading: true, error: false }, () => {
      // callback function
      fetch(API_URL)
        .then(res => res.json())
        .then(data => {
          // If city exists, update weather details
          if (data.cod === 200) {
            console.log(data);
            this.setState({
              city: data.name,
              temperature: data.main.temp,
              conditions: data.weather[0].description,
              loading: false
            });
          } else {
            // If city doesn't exist, throw error
            throw data.cod;
          }
        })
        .catch(err => {
          console.log(err);
          this.setState({
            loading: false,
            error: true
          });
        });
    });
  };

  render() {
    // Conditionally populate card content

    let content = <DefaultContent />;

    if (this.state.loading) {
      content = <SyncLoader />;
    } else if (this.state.error) {
      content = <ErrorDisplay />;
    } else if (this.state.temperature !== "") {
      content = (
        <WeatherDetails
          city={this.state.city}
          temperature={this.state.temperature}
          conditions={this.state.conditions}
        />
      );
    }

    return (
      <div className="App">
        <Header />
        <SearchBar setWeather={this.setWeather} />

        <main className="card">{content}</main>
      </div>
    );
  }
}

export default App;
