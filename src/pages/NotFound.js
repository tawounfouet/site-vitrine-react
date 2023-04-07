import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFound-content">
                <h2>Erreur 404</h2>
                <NavLink exact to="/">

                    <h3>
                        Retour à l'acceuil <i className="fas fa-home"></i>
                    </h3>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;

// cdn for fontawesome
// https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css