import React from 'react';
import LinkIcons from '../_common/LinkIcon';

function MissionDetailsContent(props) {
    console.log(props);
    const mission = props.mission;
    return (
        <div>
            <h3>{mission.mission_name}</h3>
            <p>Mission id: {mission.mission_id}</p>
            <p>Manufacturers: {mission.manufacturers}</p>
            <p>Payloads: {mission.payload_ids+'. '}</p>
            <p>{mission.description}</p>
            <p>
                Links: <LinkIcons href={mission.wikipedia} linkType="wikipedia" /> <LinkIcons href={mission.website} />
            </p>
        </div>
    );
}

export default MissionDetailsContent;
