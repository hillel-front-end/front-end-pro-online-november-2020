import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [bdUsers, setBds] = useState([]);

    const onRenderIds = () => {
        fetch('http://localhost:6060/render-ids');
    }
    const onLoadBirthdays = () => {
        fetch('http://localhost:6060/birthdays/month')
            .then(resp => resp.json())
            .then(data => {
                setBds(data);
            })
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h3>Our Telegram admin panel.</h3>
                <button onClick={onRenderIds}>Render ids</button>
                <button onClick={onLoadBirthdays}>Load BDs</button>
            </header>
            <main>
                <ul>
                    {bdUsers.map(bdUser => (
                        <li>{bdUser.chatId}</li>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export default App;
