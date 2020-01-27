import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';

import MissionDetailsContent from './MissionDetailsContent';

function MissionDetails(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [mission, setMission] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const missionId = props.match.params.missionId;
            setIsLoading(true);
            await fetch(`/api/v3/missions/${missionId}`)
                .then(res => res.json())
                .then(data => setMission(data));
            setIsLoading(false);
        }
        fetchData();
    }, [props.match.params.missionId]);

    return <div>
        {isLoading ? <LoaderSpinner /> : <MissionDetailsContent mission={mission} /> }
        </div>;
}

export default MissionDetails;
