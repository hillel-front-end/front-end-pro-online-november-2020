import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CityPicker from './components/CityPicker'  
import CityDetails from './components/CityDetails'  
import React from 'react';
import { connect, useSelector } from 'react-redux';
import TotalWeatherData from './components/TotalWeatherData';
import ForecastFiveDays from './components/ForecastFiveDays';
import { Button, ButtonGroup } from '@material-ui/core';
import { PowerTwoTone } from '@material-ui/icons';

function App(props) {
  const cities = ['London', 'Kyiv', 'Odesa', 'Dnipro'];
  const currentWeather = useSelector(state => state.weather.current);

  return (
    <Router>
      <div className="App">
        <nav className="menu">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            { currentWeather && (
                <li>
                  <Link to="/total-weather">Total weather</Link>
                </li>
            ) }
          </ul>
        </nav>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button endIcon={<PowerTwoTone />}>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>

        <Switch>
          <Route path="/city-details-5-days/:city">
            {/* city - route param */}
            <ForecastFiveDays />
          </Route>
          <Route path="/city-details/:city">
            {/* city - route param */}
            <CityDetails currentWeather={currentWeather}/>
          </Route>
          <Route path="/total-weather">
            <TotalWeatherData />
          </Route>
          <Route path="/home">
            <CityPicker myCities={cities} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state, props) => {
  return {
    list: state.list,
    value: state.value
  };
}

export default connect(mapStateToProps)(App)
