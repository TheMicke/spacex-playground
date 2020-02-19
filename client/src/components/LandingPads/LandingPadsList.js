import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';
import LandingPadsListCard from './LandingPadsListCard';
import lsh from '../../modules/localStorageHandler'
import CacheInfo from '../_common/CacheInfo';

function LandingPadsList() {
    const [isLoading, setIsLoading] = useState(false);
    const [landingPads, setLandingPads] = useState([]);

    async function fetchData() {
        setIsLoading(true)
        await fetch('/api/v3/landing_pads')
        .then(res => res.json())
        .then(data => setLandingPads(data));
        setIsLoading(false);
    }
    
    useEffect(() => {
        if( landingPads.length === 0) {
            if (!lsh.get('landingPads')) {
                fetchData();
            } else {
                setLandingPads(lsh.get('landingPads'))
            }

        } else {
            if(!lsh.get('landingPads')) {
                lsh.set('landingPads', landingPads, 21600000)
            }
        }
    }, [landingPads]);

    return (
        <div>
            <CacheInfo dataKey='landingPads' />
            {isLoading ? <LoaderSpinner /> : landingPads.length>0 && landingPads.map(landingPad => <LandingPadsListCard key={landingPad.id} data={landingPad} />)}
        </div>
    );
}

export default LandingPadsList;
