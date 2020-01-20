import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';
import RocketContent from './RocketDetailsContent';

function RocketDetails(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [waitingForImages, setWaitingForImages] = useState(true);
    const [rocket, setRocket] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const rocketId = props.match.params.rocketId;
            setIsLoading(true);
            await fetch(`/rockets/${rocketId}`)
                .then(res => res.json())
                .then(data => setRocket(data));
            setIsLoading(false);
            setWaitingForImages(false)
        }
        fetchData();
    }, [props.match.params.rocketId]);

    return <div>{isLoading ? <LoaderSpinner /> : <RocketContent rocket={rocket} waitingForImages={waitingForImages} />}</div>;
}

export default RocketDetails;
