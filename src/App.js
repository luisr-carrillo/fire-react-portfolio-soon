import React from 'react';
import './App.css';
import Suscripcion from './components/Suscripcion';
import SocialMedia from './components/SocialMedia';

const App = () => (
    <div className="container">
        <div className="cuadro">
            <h1>
                Luis R. Carrillo | <span>Desarrollador Web</span>
            </h1>
            <h2>Próximamente</h2>
            <hr />
            <h3>Notificarme cuando este disponible</h3>
            <Suscripcion />
            <SocialMedia />
        </div>
    </div>
);

export default App;
