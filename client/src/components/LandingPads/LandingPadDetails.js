import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';

import LandingPadDetailsContent from './LandingPadDetailsContent';

function LandingPadDetails(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [landingPad, setLandingPad] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const landingPadId = props.match.params.landingPadId;
            setIsLoading(true);
            await fetch(`/api/v3/landing_pads/${landingPadId}`)
                .then(res => res.json())
                .then(data => setLandingPad(data));
            setIsLoading(false);
        }
        fetchData();
    }, [props.match.params.landingPadId]);

    return <div>
        {isLoading ? <LoaderSpinner /> : <LandingPadDetailsContent data={landingPad} /> }
        </div>;
}

export default LandingPadDetails;
