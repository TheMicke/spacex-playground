import React from 'react';
import styled from 'styled-components';

import Lightbox from './Lightbox';

const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
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
    const images = props.images.map(imageUrl => {
        return <a key={imageUrl} href={imageUrl} target="_blank" rel="noopener noreferrer"><Image src={imageUrl} /></a>
    });

    return (
        <>
            <ImageContainer>
                {images}
            </ImageContainer>
            <Lightbox images={props.images} currentIndex={1} />
        </>
    );
}

export default ThumbnailGrid;
