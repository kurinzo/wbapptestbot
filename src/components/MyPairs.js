import React, { useEffect, useState } from 'react';

const MyPairs = () => {
    const [pairs, setPairs] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        // Заглушка для пар
        const mockPairs = [
            { id: 1, name: 'Человек 1', photo: 'https://avatars.dicebear.com/api/avataaars/1.svg', telegram: '@user1' },
            { id: 2, name: 'Человек 2', photo: 'https://avatars.dicebear.com/api/avataaars/2.svg', telegram: '@user2' }
        ];
        setPairs(mockPairs);

        // Заглушка для локаций
        const mockLocations = [
            { id: 1, name: 'Локация 1' },
            { id: 2, name: 'Локация 2' }
        ];
        setLocations(mockLocations);
    }, []);

    const handleMeetRequest = (locationId, userId) => {
        console.log(`Запрос на встречу отправлен пользователю ${userId} в локации ${locationId}`);
    };

    const handleNext = () => {
        if (currentIndex < pairs.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const currentPair = pairs[currentIndex];

    return (
        <div>
            <h1>Мои пары</h1>
            {currentPair && (
                <div className="user-info">
                    <img src={currentPair.photo} alt={currentPair.name} />
                    <p>{currentPair.name}</p>
                    <a href={`https://t.me/${currentPair.telegram}`} target="_blank" rel="noopener noreferrer">
                        <button>Написать в личку</button>
                    </a>
                    <select onChange={(e) => handleMeetRequest(e.target.value, currentPair.id)}>
                        <option value="">Выберите место встречи</option>
                        {locations.map(location => (
                            <option key={location.id} value={location.id}>{location.name}</option>
                        ))}
                    </select>
                </div>
            )}
            <div>
                <button onClick={handlePrev} disabled={currentIndex === 0}>Назад</button>
                <button onClick={handleNext} disabled={currentIndex === pairs.length - 1}>Далее</button>
            </div>
        </div>
    );
};

export default MyPairs;
