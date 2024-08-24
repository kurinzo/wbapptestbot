import React from 'react';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import MyPairs from './MyPairs';
import Catalog from './Catalog';

const Networking = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const showMainContent = location.pathname === '/networking';

    return (
        <div>
            <button className="back" onClick={() => navigate(-1)}>Назад</button>
            {showMainContent && (
                <>
                    <h1>Нетворкинг</h1>
                    <Link to="my-pairs"><button>Мои пары</button></Link>
                    <Link to="catalog"><button>Каталог собеседников</button></Link>
                </>
            )}
            <Routes>
                <Route path="my-pairs" element={<MyPairs />} />
                <Route path="catalog" element={<Catalog />} />
            </Routes>
        </div>
    );
};

export default Networking;
