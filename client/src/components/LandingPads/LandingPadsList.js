import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';
import LandingPadsListCard from './LandingPadsListCard';

function LandingPadsList() {
    const [isLoading, setIsLoading] = useState(false);
    const [landingPads, setLandingPads] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            await fetch('/api/v3/landing_pads')
            .then(res => res.json())
            .then(data => setLandingPads(data));
            setIsLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? 
            <LoaderSpinner /> 
            : 
            landingPads.length>0 && landingPads.map(landingPad => <LandingPadsListCard key={landingPad.id} data={landingPad} />)
            }
        </div>
    );
}

export default LandingPadsList;
