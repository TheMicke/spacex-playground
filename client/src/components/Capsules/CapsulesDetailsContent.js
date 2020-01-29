import React from 'react';
import '../_css/details-view.css';
import UnixTimeConverter from '../_common/UnixTimeConverter';


function CapsuleDetailsContent(props) {
    console.log('CapsuleDetailsContent', props);
    let capsule = props.data;
    
    return (
        <div className="content-container">
            <div className="data-block">
                <h3><span className="text-heading">{capsule.capsule_serial}</span></h3>
                <p><span className="text-heading">Capsule id: </span><a href={"/dragons/"+capsule.capsule_id}>{capsule.capsule_id}</a></p>
                <p><span className="text-heading">Original launch date: </span><UnixTimeConverter timestamp={capsule.original_launch_unix} /></p>
                <p><span className="text-heading">Missions: </span>{capsule.missions?.length}. 
                    { capsule.missions?.length > 0 ? ' (' : '' }
                    { capsule.missions?.length > 0 ? capsule.missions?.map(mission => <a href={"/launches/" + mission.flight} key={mission.name}> {mission.name}, </a>) : '' }
                    { capsule.missions?.length > 0 ? ')' : '' }
                </p>
                <p><span className="text-heading">Capsule status: </span>{capsule.status}</p>
                <p><span className="text-heading">Type: </span>{capsule.type}</p>
                <p><span className="text-heading">Landings: </span>{capsule.landings}</p>
                <p><span className="text-heading">Reuses: </span>{capsule.reuse_count}</p>
                <p><span className="text-heading">Details: </span>{capsule.details}</p>
            </div>
        </div>
    );
}

export default CapsuleDetailsContent;
