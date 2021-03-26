import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CityPicker from './components/CityPicker'  
import CityDetails from './components/CityDetails'  
import { useState } from 'react';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const cities = ['London', 'Kyiv', 'Odesa', 'Dnipro'];

  const cityChangedHandler = (weather) => {
    document.title = `Our weather in ${weather.name}!`;
    setCurrentWeather(weather);
  }

  return (
    <Router>
      <div className="App">
        <nav className="menu">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/city-details/:city">
            {/* city - route param */}
            <CityDetails currentWeather={currentWeather} />
          </Route>
          <Route path="/contact">
            Contact
          </Route>
          <Route path="/home">
            <CityPicker myCities={cities} cityChanged={cityChangedHandler} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
