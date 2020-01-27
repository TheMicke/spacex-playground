import React from 'react';
import '../_css/details-view.css';
import UnixTimeConverter from '../_common/UnixTimeConverter';

function CoreDetailsContent(props) {
    console.log('CoreDetailsContent', props);    
    const core = props.core;

    return (
        <div className="info-block">
            <h3><span className="info-text-heading">{core.core_serial}</span></h3>
            <p><span className="info-text-heading">Status: </span>{core.status}</p>
            <p><span className="info-text-heading">Block: </span>{core.block}</p>
            <p><span className="info-text-heading">First launch: </span><UnixTimeConverter timestamp={core.original_launch_unix} /></p>
            <p><span className="info-text-heading">Reuse count: </span>{core.reuse_count}</p>
            <p><span className="info-text-heading">Missions: </span>{core.missions?.length}. ({core.missions?.map(mission => <a href={"/launches/" + mission.flight} key={mission.name}>{mission.name}, </a>)})</p>
            
            <p><span className="info-text-heading">RTLS landing attempts: </span>{core.rtls_attempts}</p>
            <p><span className="info-text-heading">RTLS landing sucess: </span>{core.rtls_landings}</p>
            <p><span className="info-text-heading">RTLS landing success rate: </span>{isNaN(((core.rtls_landings / core.rtls_attempts) * 100).toFixed(2)) ? '-' : ((core.rtls_landings / core.rtls_attempts) * 100).toFixed(2) + ' %'} </p>
            <p><span className="info-text-heading">ASDS landing attempts: </span>{core.asds_attempts}</p>
            <p><span className="info-text-heading">ASDS landing success: </span>{core.asds_landings}</p>
            <p><span className="info-text-heading">ASDS landing success rate: </span>{core.asds_attempts > 0 ? ((core.asds_landings / core.asds_attempts) * 100).toFixed(2) +'%' : '-'} </p>
            
            <p><span className="info-text-heading">Water landing attemptslanding: </span>{core.water_landing ? 'Yes' : 'No'}</p>
            <p><span className="info-text-heading">Details: </span>{core.details}</p>

            <sup>
                <p>
                    RTLS = Return To Launch Site<br />
                    ASDS = Autonomous spaceport drone ship
                </p>
            </sup>
        </div>





    );
}

export default CoreDetailsContent;
