import React, { useEffect } from 'react';

import backToTopImg from '../../images/rocket-to-top.svg';

const toTopButtonStyle = {
    display: 'block',
    position: 'fixed',
    bottom: '-50px',
    right: '20px',
    height: '50px',
    width: '50px',
    zIndex: '99',
    border: '2px solid #fff',
    backgroundColor: '#005287',
    cursor: 'pointer',
    padding: '7px',
    borderRadius: '50%',
    transition: 'bottom 0.2s ease-in',
};

function BackToTopButton() {
    let toTopButton = document.getElementById('backToTopBtn');

    useEffect(() => {
    }, []);
    toTopButton = document.getElementById('backToTopBtn');

    const scrollFunction = () => {
        document.body.scrollTop > 230 || document.documentElement.scrollTop > 230 ? (toTopButton.style.bottom = '30px') : (toTopButton.style.bottom = '-50px');
    };

    const backToTop = () => {
        document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
        document.body.scrollTop = 0; // Safari
    }

    window.onscroll = () => { scrollFunction() };

    return (
        <button onClick={backToTop} id="backToTopBtn" title="Back to top" style={toTopButtonStyle}>
            <img src={backToTopImg} alt="menu"/>
        </button>

    );
}

export default BackToTopButton;
