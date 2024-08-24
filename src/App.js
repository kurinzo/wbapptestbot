import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import Program from './components/Program';
import AskSpeaker from './components/AskSpeaker';
import Networking from './components/Networking';
import './App.css'; // Импорт CSS

function App() {
    useEffect(() => {
        if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.expand();
        }
    }, []);

    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<WelcomeScreen />} />
                    <Route path="/program" element={<Program />} />
                    <Route path="/ask-speaker" element={<AskSpeaker />} />
                    <Route path="/networking/*" element={<Networking />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
