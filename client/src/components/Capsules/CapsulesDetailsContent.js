import React from 'react';
import '../_css/details-view.css';
import '../_css/component-general.css';
import DefaultBackButton from '../_common/DefaultBackButton';
import UnixTimeConverter from '../_common/UnixTimeConverter';


function CapsuleDetailsContent(props) {
    let capsule = props.data;
    
    return (
        <div className="page-content-container">
            <div className="only-back-button">
                <DefaultBackButton url="/capsules"/>
            </div>

            <div className="data-block data-block-full">
                <h2 className="details-heading">{capsule.capsule_serial}</h2>
                <p><span className="details-text-heading">Capsule id: </span><a href={"/dragons/"+capsule.capsule_id}>{capsule.capsule_id}</a></p>
                <p><span className="details-text-heading">Original launch date: </span><UnixTimeConverter timestamp={capsule.original_launch_unix} /></p>
                <p><span className="details-text-heading">Missions: </span>{capsule.missions?.length}. 
                    { capsule.missions?.length > 0 ? ' (' : '' }
                    { capsule.missions?.length > 0 ? capsule.missions?.map(mission => <a href={"/launches/" + mission.flight} key={mission.name}> {mission.name}, </a>) : '' }
                    { capsule.missions?.length > 0 ? ')' : '' }
                </p>
                <p><span className="details-text-heading">Capsule status: </span>{capsule.status}</p>
                <p><span className="details-text-heading">Type: </span>{capsule.type}</p>
                <p><span className="details-text-heading">Landings: </span>{capsule.landings}</p>
                <p><span className="details-text-heading">Reuses: </span>{capsule.reuse_count}</p>
                <p><span className="details-text-heading">Details: </span>{capsule.details ? capsule.details : '-'}</p>
            </div>
        </div>
    );
}

export default CapsuleDetailsContent;
