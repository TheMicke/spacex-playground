import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
    
`;

const Image = styled.img`
    object-fit: cover;
    height: 250px;
    width: 250px;
    margin: 5px;
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
