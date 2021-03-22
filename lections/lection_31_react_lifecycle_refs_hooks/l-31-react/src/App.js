import logo from './logo.svg';
import './App.css';
import Stopwatch from './Stopwatch/Stopwatch'
import React, { useEffect } from 'react';

function App() {
  const [value, setValue] = React.useState(10);
  const [address, setAddress] = React.useState({
    city: 'Kyiv',
    street: 'Mechnikova',
    zip: '12356'
  });
  

  // useEffect(() => {
  //   // App mounted
  //   let intervalId = setInterval(() => {
  //     console.log('INTERVAL');
  //     setValue(value + 1);
  //   }, 300);

  //   // App unmounted
  //   return () => {
  //     clearInterval(intervalId);
  //   }
  // });

  // componentDidMount() {
  //   console.log('componentDidMount');
    
  //   this.intervalId = setInterval(() => {
  //     console.log('INTERVAL');
  //     this.setState({value: this.state.value + 1});
  //   }, 300);
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  //   clearInterval(this.intervalId);
  // }

  // setTimeout(() => {
  //   setValue(50);
  // }, 2000)

  setTimeout(() => {

    // const newAddress = Object.assign({}, address, { city: 'Dnipro' });
    // setAddress(newAddress);


    // setAddress({...address, city: 'Dnipro'}); // bad solution
    // setAddress(prevState => ({...prevState, city: 'Dnipro'})); // good solution
    setAddress(prevState => ({...prevState, city: 'Dnipro', zip: '4657'}));
  }, 2000)

  return (
    <div className="App">
      {/* Hello {value},
      Address: {address.city}, {address.street}, {address.zip} */}
      <hr />
      <Stopwatch />
    </div>
  );
}

// class App extends React.Component {
//   intervalId = 0;
//   constructor(props) {
//     super(props);
//     this.state = { value: 10 };
//   }

//   componentDidMount() {
//     console.log('componentDidMount');
    
//     this.intervalId = setInterval(() => {
//       console.log('INTERVAL');
//       this.setState({value: this.state.value + 1});
//     }, 300);
//   }

//   componentWillUnmount() {
//     console.log('componentWillUnmount');
//     clearInterval(this.intervalId);
//   }

//   render() {
//     return (
//       <div className="App">
//         Hello {this.state.value}
//       </div>
//     );
//   }
// }

export default App;
