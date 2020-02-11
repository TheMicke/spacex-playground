import React, { useState } from 'react';
import styled from 'styled-components';

import leftArrow from '../../images/arrow_left_white.svg'
import rightArrow from '../../images/arrow_right_white.svg'
import closeIcon from '../../images/icon_close_white.svg'

const LightboxContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.75);
    color: #f0f;
`;

const LightboxTopRow = styled.div`
    height: 50px;
`;

const LightboxCloseIcon = styled.img`
    float: right;
    height: 25px;
    width: 25px;
    margin: 25px;
    opacity: 0.5;
    transition: opacity ease-in 0.2s;

    &:hover {
        opacity: 1;
        transition: opacity ease-in 0.2s;
    }
`;

const LighboxContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100vw;
`;

const LightboxNextPrevIcon = styled.img`
    width: 5%;
    opacity: 0.5;
    transition: opacity ease-in 0.2s;

    &:hover {
        opacity: 1;
        transition: opacity ease-in 0.2s;
    }
`;

const LightboxImage = styled.img`
    max-width: 90%;
    max-height: 90%;
`;

function Lightbox(props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(props.currentIndex);

    const prevImage = () => {
        if (currentImageIndex - 1 >= 0) {
            setCurrentImageIndex(currentImageIndex - 1)
        } else {
            setCurrentImageIndex(props.images?.length - 1)
        }
    }

    const nextImage = () => {
        if (currentImageIndex + 1 <= props.images?.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1)
        } else {
            setCurrentImageIndex(0)
        }
    }

    return (
        <LightboxContainer>
            <LightboxTopRow>
                <LightboxCloseIcon src={closeIcon} />
            </LightboxTopRow>
            
            <LighboxContentContainer>
                <LightboxNextPrevIcon src={leftArrow} onClick={prevImage} />
                <LightboxImage src={props.images?.[currentImageIndex]} />
                <LightboxNextPrevIcon src={rightArrow} onClick={nextImage} />
            </LighboxContentContainer>
        </LightboxContainer>
    );
}

export default Lightbox;