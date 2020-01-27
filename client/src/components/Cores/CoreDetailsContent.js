import React from 'react';
import '../_css/details-view.css';
import UnixTimeConverter from '../_common/UnixTimeConverter';

function CoreDetailsContent(props) {
    console.log('CoreDetailsContent', props);    
    const core = props.core;

    return (
        <div className="info-block">
            <h3>{core.core_serial}</h3>
            <p>Status: {core.status}</p>
            <p>Block: {core.block}</p>
            <p>First launch: <UnixTimeConverter timestamp={core.original_launch_unix} /></p>
            <p>Reuse count: {core.reuse_count}</p>
            <p>Missions: {core.missions?.length}. ({core.missions?.map(mission => <a href={"/launches/" + mission.flight} key={mission.name}>{mission.name}, </a>)})</p>
            
            <p>RTLS landing attempts: {core.rtls_attempts}</p>
            <p>RTLS landing sucess: {core.rtls_landings}</p>
            <p>RTLS landing success rate: {isNaN(((core.rtls_landings / core.rtls_attempts) * 100).toFixed(2)) ? '-' : ((core.rtls_landings / core.rtlsattempts) * 100).toFixed(2) + ' %'} </p>
            <p>ASDS landing attempts: {core.asds_attempts}</p>
            <p>ASDS landing success: {core.asds_landings}</p>
            <p>ASDS landing success rate: {core.asds_attempts > 0 ? ((core.asds_landings / core.asds_attempts) * 100).toFixed(2) +'%' : '-'} </p>
            
            <p>Water landing attemptslanding: {core.water_landing ? 'Yes' : 'No'}</p>
            <p>Details: {core.details}</p>

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
