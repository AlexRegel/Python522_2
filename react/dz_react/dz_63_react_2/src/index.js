import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import data from './db.json';

let nav = { "Главная": "/index", "Новости": "/news", "О компании": "/about", "Магазин": "/shop", "Контакты": "/contacts" };
let text = "My site";
let slogan = "I am learning React";
var db = data.music;

console.log(db);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App title={text}
     slogan={slogan} navigation={nav} db={db} />
  </React.StrictMode>
);
