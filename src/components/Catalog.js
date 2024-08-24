import React, { useEffect, useState } from 'react';

const Catalog = () => {
    const [people, setPeople] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Заглушка для каталога
        const mockPeople = [
            { id: 1, name: 'Человек 1', photo: 'https://avatars.dicebear.com/api/avataaars/3.svg', description: 'Описание 1' },
            { id: 2, name: 'Человек 2', photo: 'https://avatars.dicebear.com/api/avataaars/4.svg', description: 'Описание 2' }
        ];
        setPeople(mockPeople);
    }, []);

    const handleRequestChat = (userId) => {
        console.log(`Запрос на общение отправлен пользователю ${userId}`);
    };

    const handleNext = () => {
        if (currentIndex < people.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const currentPerson = people[currentIndex];

    return (
        <div>
            <h1>Каталог собеседников</h1>
            {currentPerson && (
                <div className="user-info">
                    <img src={currentPerson.photo} alt={currentPerson.name} />
                    <p>{currentPerson.name}</p>
                    <p>{currentPerson.description}</p>
                    <button onClick={() => handleRequestChat(currentPerson.id)}>Предложить пообщаться</button>
                </div>
            )}
            <div>
                <button onClick={handlePrev} disabled={currentIndex === 0}>Назад</button>
                <button onClick={handleNext} disabled={currentIndex === people.length - 1}>Далее</button>
            </div>
        </div>
    );
};

export default Catalog;
