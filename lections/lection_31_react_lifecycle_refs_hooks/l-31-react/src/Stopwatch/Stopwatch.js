import React from 'react';

function Stopwatch() {
    const [time, setTime] = React.useState(0);
    const [intervalId, setId] = React.useState();
    const [resultList, setResult] = React.useState([]);
    const [isError, setErrorStatus] = React.useState(false);
    const period = 50;

    const startTime = () => {
        if (intervalId) { // reset
            clearInterval(intervalId);
            setTime(0);
            setResult([])
        }

        // if (intervalId) {
        //     return;
        // }

        const id = setInterval(() => {
            setTime(prevState => prevState + period)
        }, period);
        setId(id);
    }
    const stopTime = () => {
        clearInterval(intervalId);
        setId(undefined);
    }

    const stopLapTime = () => {
        // addResult(currentResultList => currentResultList.concat([time]));
        setResult(currentResultList => [...currentResultList, time/1000]);
    }

    return (
        <div>
            Stopwatch
            <hr />
            Current time: <br /> {time / 1000}
            <hr />
            <button onClick={startTime}>
                Start
            </button>
            <hr />
            <button onClick={stopLapTime}>
                Lap
            </button> 
            <hr />
            <button onClick={stopTime}>
                Stop
            </button>
            <button onClick={() => {
                if (intervalId) {
                    setErrorStatus(true);
                    setTimeout(() => {
                        setErrorStatus(false);
                    }, 1000);

                    return;
                }
                setTime(0);
                setResult([]);
                setId(undefined);
            }}>
                Reset
            </button>
            <hr />
            {<StopWatchError enable={isError} />}
            <table border="1">
                <tbody>
                    {resultList.map((item, index) => (
                        <tr key={'id-'+index}>
                            <td>{item}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


function StopWatchError(props) {
    if (!props.enable) {
        return null;
    }
    
    return <span style={{ color: 'red' }}>Stopwatch is working</span>;
}


export default Stopwatch;