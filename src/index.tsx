import App from 'app/App';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Измените 
import {BrowserRouter, Route, Routes} from "react-router-dom";

const container = document.getElementById('root'); // Ваш контейнер
const root = ReactDOM.createRoot(container); // Создание корня

root.render (
    <BrowserRouter>
    <App />
    </BrowserRouter>
)