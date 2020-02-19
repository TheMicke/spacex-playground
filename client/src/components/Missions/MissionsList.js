import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';
import MissionsListCard from './MissionsListCard';
import lsh from '../../modules/localStorageHandler';
import CacheInfo from '../_common/CacheInfo';

function MissionsList() {
    const [isLoading, setIsLoading] = useState(false);
    const [missions, setMissions] = useState([]);

    async function fetchData() {
        setIsLoading(true)
        await fetch('/api/v3/missions')
        .then(res => res.json())
        .then(data => setMissions(data));
        setIsLoading(false);
    }
    
    useEffect(() => {
        if( missions.length === 0) {
            if (!lsh.get('missions')) {
                fetchData();
            } else {
                setMissions(lsh.get('missions'))
            }

        } else {
            if(!lsh.get('missions')) {
                lsh.set('missions', missions, 21600000)
            }
        }
    }, [missions]);

    return (
        <div>
            <CacheInfo dataKey='missions' />
            {isLoading ? <LoaderSpinner /> : missions.length>0 && missions.map(mission => <MissionsListCard key={mission.mission_id} data={mission} />)}
        </div>
    );
}

export default MissionsList;
