import React from 'react';
import { useNavigate } from 'react-router-dom';

const AskSpeaker = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button className="back" onClick={() => navigate(-1)}>Назад</button>
            <h1>Задать вопрос спикеру</h1>
            <a href="https://external-form.com" target="_blank" rel="noopener noreferrer">
                <button>Перейти к форме</button>
            </a>
        </div>
    );
};

export default AskSpeaker;
