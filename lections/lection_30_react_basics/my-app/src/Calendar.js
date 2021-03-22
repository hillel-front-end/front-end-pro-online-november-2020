//1 2 3 4 5 6 7
//...
//29 30 31

import './Calendar.scss';
import React, {Fragment, useState} from 'react';

let days = [];

for (let i = 1; i <= 30; i++) {
    days.push(i)
}

// for (var i = 0; i < 5; i++) {(function (j) {
//     setTimeout(() => days.push(j), 0);
// })(i)
// }

// i === 5
// console.error(days); // [1, 2, 3, 4]
// console.error(days); // [4]
// console.error(days); // [5, 5, 5, 5]
const getRand = () => {
    return Math.floor(Math.random()*256);
};
function getRandomColor() {
    const colors = [
        getRand(),
        getRand(),
        getRand()
    ];

    return `rgb(${colors})`;
}



const Day = (props) => {
    const {dayNumber, className} = props;

    const [color, setColor] = useState(null);

    return <span
        className={`calendar__day ${className}`}
        style={{
            'background': color
        }}
        onClick={() => setColor(getRandomColor())}
    >
        {dayNumber}
    </span>;
}

const Calendar = (props) => {
    return <div className="calendar">
        {days.map((day, index) => {
            if (index % 7 === 0) {
                return <Fragment key={'day_' + index}>
                    <br/>
                    <Day dayNumber={day} className={day % 7 === 0 ? 'calendar__day--weekend' : ''}/>
                </Fragment>
            }
            return <Day key={'day_' + index} dayNumber={day} className={day % 7 === 0 ? 'calendar__day--weekend' : ''}/>
        })}
    </div>
}

export default Calendar;
