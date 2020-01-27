import React from 'react';
import '../_css/details-view.css';
import UnixTimeConverter from '../_common/UnixTimeConverter';


function CapsuleDetailsContent(props) {
    console.log('CapsuleDetailsContent', props);
    let capsule = props.data;
    
    return (
        <div className="info-text">
            <h3>{capsule.capsule_serial}</h3>
            <p>Capsule id: <a href={"/dragons/"+capsule.capsule_id}>{capsule.capsule_id}</a></p>
            <p>Original launch date: <UnixTimeConverter timestamp={capsule.original_launch_unix} /></p>
            <p>Missions: {capsule.missions?.length}. ({capsule.missions?.map(mission => <a href={"/launches/" + mission.flight} key={mission.name}>{mission.name}, </a>)})</p>
            <p>Capsule status: {capsule.status}</p>
            <p>Type: {capsule.type}</p>
            <p>Landings: {capsule.landings}</p>
            <p>Reuses: {capsule.reuse_count}</p>
            <p>Details: {capsule.details}</p>
        </div>
    );
}

export default CapsuleDetailsContent;
