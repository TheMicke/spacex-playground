import React from 'react';
import LinkIcons from '../_common/LinkIcon';
import '../_css/details-view.css';
import '../_css/component-general.css';
import DefaultBackButton from '../_common/DefaultBackButton';

function MissionDetailsContent(props) {
    const mission = props.mission;
    return (
        <div className="page-content-container">
            <DefaultBackButton />
            <div className="data-block data-block-thirds">
                <h2 className="details-heading">{mission.mission_name}</h2>
                <p><span className="details-text-heading">Mission id: <br /></span>{mission.mission_id}</p>
                <p><span className="details-text-heading">Manufacturers: <br /></span>{mission.manufacturers}</p>
                <p><span className="details-text-heading">Payloads: <br /></span>{mission.payload_ids?.map(payloadId => <a href={'/payloads/'+payloadId} key={payloadId}>{payloadId + ', '}</a> )}</p>
                <p><span className="details-text-heading">Mission description: </span> <br />{mission.description}</p>
                <p><span className="details-text-heading">Links: </span>
                    { mission.wikipedia ? <LinkIcons href={mission.wikipedia} linkType="wikipedia" /> : '' }
                    { mission.website ? <LinkIcons href={mission.website} /> : '' }
                    { mission.twitter ? <LinkIcons href={mission.twitter} linkType="twitter" /> : '' }
                </p>
            </div>
        </div>
    );
}

export default MissionDetailsContent;
