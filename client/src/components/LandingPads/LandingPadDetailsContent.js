import React from 'react';
import LinkIcon from '../_common/LinkIcon';

function LandingPadDetailsContent(props) {
    let landingPad = props.data;
    console.log(props);

    return (
        <div>
            <h3>{landingPad.full_name}</h3>
            <p>Landing Pad id: {landingPad.id}</p>
            <p>Status: {landingPad.status}</p>
            <p>
                Location: {landingPad.location?.name}, {landingPad.location?.region}
            </p>
            <p>
                Location latitude: {landingPad.location?.latitude} longitude: {landingPad.location?.longitude}
            </p>
            <p>Landing type: {landingPad.landing_type}</p>
            <p>Attempted landings: {landingPad.attempted_landings}</p>
            <p>Successful landings: {landingPad.successful_landings}</p>
            <p>Landing success rate: {((landingPad.successful_landings / landingPad.attempted_landings) * 100).toFixed(2)} %</p>
    <p>Details: {landingPad.details}</p>
    <p>Links: <LinkIcon href={landingPad.wikipedia} linkType="wikipedia" /></p>

        </div>
    );
}

export default LandingPadDetailsContent;
