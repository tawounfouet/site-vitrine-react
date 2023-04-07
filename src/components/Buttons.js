import React from 'react';
import { NavLink } from 'react-router-dom';

const Buttons = (props) => {
    return (
        <div className="scroll-bottom">
            {props.left && (
                <NavLink to={props.left} classnName="left hover">
                    <i className="fas fa-chevron-left"></i>
                </NavLink>
            )}

            {props.right && (
                <NavLink to={props.right} className="right hover">
                    <i className="fas fa-chevron-right"></i>
                </NavLink>
            )}
        </div>
    );
};

export default Buttons;
