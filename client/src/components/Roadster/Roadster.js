import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';

import RoadsterContent from './RoadsterContent';

function Roadster() {
    const [isLoading, setIsLoading] = useState(false);
    const [waitingForImages, setWaitingForImages] = useState(true);
    const [roadster, setRoadster] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            await fetch('/roadster')
            .then(res => res.json())
            .then(data => setRoadster(data));
            setIsLoading(false);
            setWaitingForImages(false);
        }
        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? <LoaderSpinner /> : <RoadsterContent data={roadster} waitingForImages={waitingForImages} />}
        </div>
    );
}

export default Roadster;
