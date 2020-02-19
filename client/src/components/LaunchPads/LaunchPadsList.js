import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';
import LaunchPadsListCard from './LaunchPadsListCard';
import lsh from '../../modules/localStorageHandler';
import CacheInfo from '../_common/CacheInfo';

function LaunchPadsList() {
    const [isLoading, setIsLoading] = useState(false);
    const [launchPads, setLaunchPads] = useState([]);

    async function fetchData() {
        setIsLoading(true)
        await fetch('/api/v3/launch_pads')
        .then(res => res.json())
        .then(data => setLaunchPads(data));
        setIsLoading(false);
    }
    
    useEffect(() => {
        if( launchPads.length === 0) {
            if (!lsh.get('launchPads')) {
                fetchData();
            } else {
                setLaunchPads(lsh.get('launchPads'))
            }

        } else {
            if(!lsh.get('launchPads')) {
                lsh.set('launchPads', launchPads, 21600000)
            }
        }
    }, [launchPads]);

    return (
        <div>
            <CacheInfo dataKey='launches' />
            {isLoading ? <LoaderSpinner /> : launchPads.length>0 && launchPads.map(launchPad => <LaunchPadsListCard key={launchPad.id} data={launchPad} />)}
        </div>
    );
}

export default LaunchPadsList;
