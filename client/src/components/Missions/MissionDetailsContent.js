import React from 'react';
import LinkIcons from '../_common/LinkIcon';
import '../_css/details-view.css';

function MissionDetailsContent(props) {
    console.log('MissionDetailsContent', props);
    const mission = props.mission;
    return (
        <div className="info-block">
            <h3><span className="info-text-heading">{mission.mission_name}</span></h3>
            <p><span className="info-text-heading">Mission id: </span>{mission.mission_id}</p>
            <p><span className="info-text-heading">Manufacturers: </span>{mission.manufacturers}</p>
            <p><span className="info-text-heading">Payloads: </span>{mission.payload_ids?.map(payloadId => <a href={'/payloads/'+payloadId} key={payloadId}>{payloadId + ', '}</a> )}</p>
            <p>{mission.description}</p>
            <p><span className="info-text-heading">Links: </span><LinkIcons href={mission.wikipedia} linkType="wikipedia" /> <LinkIcons href={mission.website} /></p>
        </div>
    );
}

export default MissionDetailsContent;
