import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeScreen = () => (
    <div>
        <h1>Welcome to the Event</h1>
        <Link to="/program"><button>Программа</button></Link>
        <Link to="/ask-speaker"><button>Задать вопрос спикеру</button></Link>
        <Link to="/networking"><button>Нетворкинг</button></Link>
    </div>
);

export default WelcomeScreen;
