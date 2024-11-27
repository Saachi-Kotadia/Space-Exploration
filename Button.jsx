import React from 'react';
import './Button.css';
import {useState} from 'react';

function Button({children,className,disabled=false,onClick, type="button", visual="button"}) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        if (onClick) {
            onClick();
        }
    };

    let buttonClass = "button";
    if (visual === "link") {
        buttonClass = "button-link";
    }

    return (
        <>
            <button
                className={`${buttonClass} ${className}`}
                disabled={disabled}
                type={type}
                onClick={handleClick}
            >
                {children}
            </button>
        
        </>
    );
}

export default Button;
 /*  {clicked && <p>The button was clicked!</p>}*/