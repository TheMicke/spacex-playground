import React from 'react';
import LinkIcon from '../_common/LinkIcon';
import '../_css/details-view.css';

function LandingPadDetailsContent(props) {
    let landingPad = props.data;
    console.log('LandingPadDetailsContent', props);

    return (
        <div className="info-block">
            <h3>{landingPad.full_name}</h3>
            <p><span className="info-text-heading">Landing Pad id: </span>{landingPad.id}</p>
            <p><span className="info-text-heading">Status: </span>{landingPad.status}</p>
            <p>
            <span className="info-text-heading">Location: </span>{landingPad.location?.name}, {landingPad.location?.region}
            </p>
            <p>
            <span className="info-text-heading">Location: </span>Lat. {landingPad.location?.latitude} Long. {landingPad.location?.longitude}
            </p>
            <p><span className="info-text-heading">Landing type: </span>{landingPad.landing_type}</p>
            <p><span className="info-text-heading">Attempted landings: </span>{landingPad.attempted_landings}</p>
            <p><span className="info-text-heading">Successful landings: </span>{landingPad.successful_landings}</p>
            <p><span className="info-text-heading">Landing success rate: </span>{((landingPad.successful_landings / landingPad.attempted_landings) * 100).toFixed(2)} %</p>
            <p><span className="info-text-heading">Details: </span>{landingPad.details}</p>
            <p><span className="info-text-heading">Links: </span><LinkIcon href={landingPad.wikipedia} linkType="wikipedia" /></p>

        </div>
    );
}

export default LandingPadDetailsContent;
