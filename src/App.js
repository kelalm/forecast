import React, { Component } from "react";

import { MoonLoader } from "react-spinners";
import classes from "./App.module.css";

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
      <div className={classes.AppWrapper}>
        <h1>Head Stuff</h1>
        {/* <Header /> */}
        <main className={classes.AppMain}>
          <h6>Main Stuff</h6>
          {/* <SearchBar />
          <Card>
            <WeatherDetails /> */}
          {/* <MoonLoader /> */}
          {/* <Preview /> */}
          {/* <ErrorNotice /> */}
          {/* </Card> */}
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
