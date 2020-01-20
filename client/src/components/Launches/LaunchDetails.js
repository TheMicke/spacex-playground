import React, { useState, useEffect } from 'react';

import LoaderSpinner from '../_common/LoaderSpinner';
import LaunchDetailsContent from './LaunchDetailsContent';

function LaunchDetails(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [waitingForImages, setWaitingForImages] = useState(true);
    const [launch, setLaunch] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const flightNumber = props.match.params.flightNumber;
            await fetch(`/launches/${flightNumber}`)
                .then(res => res.json())
                .then(data => setLaunch(data))
                .catch(err => console.log(err));
            setIsLoading(false);
            setWaitingForImages(false);
        }
        fetchData();
    }, [props.match.params.flightNumber]);

    return (
        <div>
            {isLoading ? <LoaderSpinner /> : <LaunchDetailsContent launch={launch} isLoading={isLoading} waitingForImages={waitingForImages} />}
        </div>
    );
}

export default LaunchDetails;
