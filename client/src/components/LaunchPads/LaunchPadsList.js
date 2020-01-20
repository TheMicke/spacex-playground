import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';


import LaunchPadsListCard from './LaunchPadsListCard';

function LaunchPadsList() {
    const [isLoading, setIsLoading] = useState(false);
    const [launchPads, setLaunchPads] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            await fetch('/launch_pads')
            .then(res => res.json())
            .then(data => setLaunchPads(data));
            setIsLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? 
            <LoaderSpinner /> 
            : 
            launchPads.length>0 && launchPads.map(launchPad => <LaunchPadsListCard key={launchPad.id} data={launchPad} />)
            }
        </div>
    );
}

export default LaunchPadsList;
