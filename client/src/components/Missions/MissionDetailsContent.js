import React from 'react';
import LinkIcons from '../_common/LinkIcon';
import '../_css/details-view.css';

function MissionDetailsContent(props) {
    console.log('MissionDetailsContent', props);
    const mission = props.mission;
    return (
        <div className="content-container">
            <div className="data-block">
                <h3><span className="text-heading">{mission.mission_name}</span></h3>
                <p><span className="text-heading">Mission id: <br /></span>{mission.mission_id}</p>
                <p><span className="text-heading">Manufacturers: <br /></span>{mission.manufacturers}</p>
                <p><span className="text-heading">Payloads: <br /></span>{mission.payload_ids?.map(payloadId => <a href={'/payloads/'+payloadId} key={payloadId}>{payloadId + ', '}</a> )}</p>
                <p><span className="text-heading">Mission description: </span> <br />{mission.description}</p>
                <p><span className="text-heading">Links: </span><LinkIcons href={mission.wikipedia} linkType="wikipedia" /> <LinkIcons href={mission.website} /></p>
            </div>
        </div>
    );
}

export default MissionDetailsContent;
