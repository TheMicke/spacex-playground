import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';

import MissionsListCard from './MissionsListCard';

function MissionsList() {
    const [isLoading, setIsLoading] = useState(false);
    const [missions, setMissions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            await fetch('/api/v3/missions')
            .then(res => res.json())
            .then(data => setMissions(data));
            setIsLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? 
            <LoaderSpinner /> 
            : 
            missions.length>0 && missions.map(mission => <MissionsListCard key={mission.id} data={mission} />)
            }
        </div>
    );
}

export default MissionsList;
