import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';
import RoadsterContent from './RoadsterContent';
import lsh from '../../modules/localStorageHandler';

function Roadster() {
    const [isLoading, setIsLoading] = useState(false);
    const [waitingForImages, setWaitingForImages] = useState(true);
    const [roadster, setRoadster] = useState([]);

    async function fetchData() {
        setIsLoading(true)
        await fetch('/api/v3/roadster')
        .then(res => res.json())
        .then(data => setRoadster(data));
        setIsLoading(false);
        setWaitingForImages(false);
    }
    
    useEffect(() => {
        if( roadster.length === 0) {
            if (!lsh.get('roadster')) {
                fetchData();
            } else {
                setRoadster(lsh.get('roadster'))
            }

        } else {
            if(!lsh.get('roadster')) {
                lsh.set('roadster', roadster, 21600000)
            }
        }
    }, [roadster]);

    return (
        <div>
            {isLoading ? <LoaderSpinner /> : <RoadsterContent data={roadster} waitingForImages={waitingForImages} />}
        </div>
    );
}

export default Roadster;
