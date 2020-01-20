import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';

import LaunchPadDetailsContent from './LaunchPadDetailsContent';

function LaunchPadDetails(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [launchPad, setLaunchPad] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const launchPadId = props.match.params.siteId;
            setIsLoading(true);
            await fetch(`/launch_pads/${launchPadId}`)
                .then(res => res.json())
                .then(data => setLaunchPad(data));
            setIsLoading(false);
        }
        fetchData();
    }, [props.match.params.siteId]);

    return <div>
        {isLoading ? <LoaderSpinner /> : <LaunchPadDetailsContent data={launchPad} /> }
        </div>;
}

export default LaunchPadDetails;
