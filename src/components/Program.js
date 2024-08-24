import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Program = () => {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Заглушка для тестирования
        const mockEvents = [
            { id: 1, name: 'Событие 1', time: '10:00' },
            { id: 2, name: 'Событие 2', time: '12:00' }
        ];
        setEvents(mockEvents);
    }, []);

    return (
        <div>
            <button className="back" onClick={() => navigate(-1)}>Назад</button>
            <h1>Программа мероприятий</h1>
            <ul>
                {events.map(event => (
                    <li key={event.id}>{event.name} - {event.time}</li>
                ))}
            </ul>
        </div>
    );
};

export default Program;
