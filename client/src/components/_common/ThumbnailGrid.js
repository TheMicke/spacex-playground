import React, { useState } from 'react';
import styled from 'styled-components';

import Lightbox from './Lightbox';

const ImageGridContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const ImageContainer = styled.button`
background: none;
color: inherit;
border: none;
padding: 0;
font: inherit;
cursor: pointer;
outline: inherit;
`;

const Image = styled.img`
    object-fit: cover;
    height: 125px;
    width: 125px;
    margin: 5px;

    @media screen and (min-width: 768px) {
        height: 175px;
        width: 175px;
    }

    @media screen and (min-width: 1024px) {
        height: 270px;
        width: 270px;
    }
`;

function ThumbnailGrid(props) {
    const [showLightbox, setShowLightbox] = useState(false);
    const [imageIndex, setImageIndex] = useState(null);

    const toggleLightbox = (index) => {
        setImageIndex(index);
        setShowLightbox(!showLightbox);
    };

    const images = props.images.map((imageUrl, index) => {
        return <ImageContainer key={imageUrl} onClick={() => {toggleLightbox(index)}}><Image src={imageUrl} /></ImageContainer>
    });

    return (
        <>
            <ImageGridContainer>
                {images}
            </ImageGridContainer>
            {showLightbox ? <Lightbox images={props.images} currentIndex={imageIndex} toggleLightbox={toggleLightbox} /> : ''}
        </>
    );
}

export default ThumbnailGrid;
