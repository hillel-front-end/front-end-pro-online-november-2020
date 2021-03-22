import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.onPlusClick = this.onPlusClick.bind(this);
        this.onMinusClick = this.onMinusClick.bind(this);
    }

    state = {
        counter: 0
    };

    onPlusClick(event) {
        this.setState({counter: this.state.counter + 1});
    }

    onMinusClick(event) {
        this.setState({counter: this.state.counter - 1});
    }

    getRand(max){
        return Math.floor(Math.random()*max);
    }

    render() {
        const {onPlus, onMinus, counter} = this.props;
        // const {counter} = this.state;

        console.log(this.state);

        return <div>
            <button onClick={onPlus}>+</button> {/* button.addEventListener('click', this.onPlusClick))}*/}
            <span>{counter}</span>
            <button onClick={onMinus}>-</button>
            <hr/>
            <span onClick={onPlus}>PLUS</span>
        </div>
    }
}

//addEventListener(event, callback) {
// if (event) {
//     callback()
// }
// }

export default Counter;
