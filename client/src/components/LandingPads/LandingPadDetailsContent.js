import React from 'react';
import LinkIcon from '../_common/LinkIcon';
import '../_css/details-view.css';
import '../_css/component-general.css';
import DefaultBackButton from '../_common/DefaultBackButton';

function LandingPadDetailsContent(props) {
    let landingPad = props.data;

    return (
        <div className="page-content-container">
            <DefaultBackButton />
            <div className="data-block">
                <h2 className="details-heading">{landingPad.full_name}</h2>
                <p><span className="details-text-heading">Landing Pad id: </span>{landingPad.id}</p>
                <p><span className="details-text-heading">Status: </span>{landingPad.status}</p>
                <p><span className="details-text-heading">Location: </span>{landingPad.location?.name}, {landingPad.location?.region}</p>
                <p><span className="details-text-heading">Location: </span>Lat. {landingPad.location?.latitude} Long. {landingPad.location?.longitude}</p>
                <p><span className="details-text-heading">Landing type: </span>{landingPad.landing_type}</p>
                <p><span className="details-text-heading">Attempted landings: </span>{landingPad.attempted_landings}</p>
                <p><span className="details-text-heading">Successful landings: </span>{landingPad.successful_landings}</p>
                <p><span className="details-text-heading">Landing success rate: </span>{ landingPad.attempted_landings > 0 ? ((landingPad.successful_landings / landingPad.attempted_landings) * 100).toFixed(2) + '%' : '-' } </p>
                <p><span className="details-text-heading">Details: </span>{landingPad.details}</p>
                <p><span className="details-text-heading">Links: </span><LinkIcon href={landingPad.wikipedia} linkType="wikipedia" /></p>
            </div>
        </div>
    );
}

export default LandingPadDetailsContent;
