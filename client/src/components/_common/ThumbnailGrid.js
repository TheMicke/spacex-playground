import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
    margin: auto;
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
        height: 225px;
        width: 225px;
    }
`;

function ThumbnailGrid(props) {
    const images = props.images.map(imageUrl => {
        return <a key={imageUrl} href={imageUrl} target="_blank" rel="noopener noreferrer"><Image src={imageUrl} /></a>
    });

    return (
        <ImageContainer>
            {images}
        </ImageContainer>
    );
}

export default ThumbnailGrid;
