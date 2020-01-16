import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import LoaderSpinner from './LoaderSpinner';
import LinkIcon from './common/LinkIcon';
import ThumbnailGrid from './common/ThumbnailGrid';
import LinkRow from './common/LinkRow';

import wikipediaIcon from '../images/wikipedia_icon.svg';

const Infobox = styled.div`
    
`;

function DragonDetails(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [waitingForImages, setWaitingForImages] = useState(true);
    const [dragon, setDragon] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const dragonId = props.match.params.dragonId;
            await fetch(`/dragons/${dragonId}`)
                .then(res => res.json())
                .then(data => setDragon(data))
                .catch(err => console.log(err));
            setIsLoading(false);
            setWaitingForImages(false);
        }
        fetchData();
    }, [props.match.params.dragonId]);


    return (
        <div>
            {isLoading ? <LoaderSpinner /> : ''}
            <h2>{dragon.name}</h2>
            <Infobox>
            <p>First flight: {dragon.first_flight}</p>

            </Infobox>
            <LinkRow links={[<LinkIcon image={wikipediaIcon} href={dragon.wikipedia} />]} />

            {waitingForImages ? <LoaderSpinner /> : <ThumbnailGrid images={dragon.flickr_images}/>}
        </div>
    );
}

export default DragonDetails;
