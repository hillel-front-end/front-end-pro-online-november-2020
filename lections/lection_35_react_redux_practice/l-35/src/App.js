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
import { DIRECTION } from './services/utils';
import ForecastWrapper from './components/ForecastWrapper';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getValue } from './store';
import { resetValue } from './store/actions';

function App(props) {
  console.log(props);
  const [currentWeather, setCurrentWeather] = useState(null);
  const cities = ['London', 'Kyiv', 'Odesa', 'Dnipro'];

  const cityChangedHandler = (weather) => {
    document.title = `Our weather in ${weather.name}!`;
    setCurrentWeather(weather);
  }
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirectionField] = useState(DIRECTION.ASC);

  const value = useSelector(getValue);
  // const list = useSelector(state => state.list);
  const dispatch = useDispatch();

  return (
    <Router>
      <div className="App">
        Value: {value} |
        List: {props.list} |
        <button onClick={() => {
          props.dispatch({
            type: 'update_value',
            value: 600,
          });
        }}>Update store</button>
        <button onClick={() => {
          dispatch(resetValue(0));
        }}>Reset value</button>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
          <div>
            <select>
              <option disabled value={''}/>
              <option value="dec">DEC</option>)
              <option value="asc">ASC</option>)
            </select>

            <select>
              <option disabled value={''}/>
              <option value="dec">more then</option>)
              <option value="asc">less then</option>)
            </select>
            <input/>
          </div>
        </nav>

        <Switch>
          <Route path="/city-details-5-days/:city">
            {/* city - route param */}
            <ForecastWrapper
                sortField={sortField}
                sortDirection={sortDirection}
                setSortDirectionField={setSortDirectionField}
                setSortField={setSortField}
            />
          </Route>
          <Route path="/city-details/:city">
            {/* city - route param */}
            <CityDetails currentWeather={currentWeather}/>
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

const mapStateToProps = (state, props) => {
  // console.log(`mapStateToProps - `, props);
  return {
    list: state.list,
    value: state.value
  };
}

export default connect(mapStateToProps)(App)
