import React from 'react';
import styled from 'styled-components';
import '../_css/list-view.css';

import UnixTimeConverter from '../_common/UnixTimeConverter';
import defaultPatch from '../../images/spacex-x.png';
import iconSuccess from '../../images/icon_success.svg';
import iconFail from '../../images/icon_fail.svg';

const MissionPatch = styled.img`
    max-width: 100px;
`;

const IconLaunchListCard = styled.img`
    max-width: 25px;
    max-height: 25px;
`;

function LaunchesListCard(props) {

    let launchSuccessIcon = null
    if (Math.floor(Date.now()/1000) > props.data.launch_date_unix) {
        props.data.launch_success ? launchSuccessIcon = <IconLaunchListCard src={iconSuccess} /> : launchSuccessIcon = <IconLaunchListCard src={iconFail}/>
    } else {
        launchSuccessIcon = '-';
    }
    

    return (
        <a href={'/launches/' + props.data.flight_number} >
            <div className="list-card">
                {props.data.links.mission_patch_small ? <MissionPatch src={props.data.links.mission_patch_small} /> : <MissionPatch src={defaultPatch} />}
                <h3>{props.data.mission_name}</h3>
                <p>
                    <span className="card-heading">Launch date{props.data.launch_date_unix-(Math.floor(Date.now() / 1000)) > 0 ? '(planned): ' : ': '}</span>
                    <UnixTimeConverter timestamp={props.data.launch_date_unix} />
                </p>

                <p className="capsule-data">
                    <span className="card-heading">Launch success: </span> {launchSuccessIcon}
                </p>
            </div>
        </a>
    );
}

export default LaunchesListCard;
