import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import {useState} from 'react';
import Calendar from './Calendar';

//import log from './app.service';

function MainApp() {
  // setTimeout(() => {
  //   import('./app.service').then(({default: log, someOtherLog, NAME}) => {
  //     log();
  //   });
  // }, 2000);

  //counter

    const [value, setValue] = useState(0); //value: 0
    // const state = useState(0); //value: 0

    // const value = state[0];
    // const setValue = state[1];

    // const newValue = setValue(value + 1);
    // const newFunction = () => setValue(value + 1);

  return (
    <div className="App">

      <Counter onPlus={() => setValue(value + 1)} onMinus={() => setValue(value - 1)} counter={value}/>

      <hr/>

        App state {value}

        <Calendar/>
    </div>
  );
}

export default MainApp;
