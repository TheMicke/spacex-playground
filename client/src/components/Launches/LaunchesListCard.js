import React from 'react';
import styled from 'styled-components';
import '../_css/list-view.css';

import UnixTimeConverter from '../_common/UnixTimeConverter';
import defaultPatch from '../../images/spacex-x.png';

const MissionPatch = styled.img`
    max-width: 100px;
`;

function LaunchesListCard(props) {
    return (
        <a href={'/launches/' + props.data.flight_number} >
            <div className="list-card">
                {props.data.links.mission_patch_small ? <MissionPatch src={props.data.links.mission_patch_small} /> : <MissionPatch src={defaultPatch} />}
                <h3>{props.data.mission_name}</h3>
                <p>
                    <span className="card-heading">Launch date: </span>
                    <UnixTimeConverter timestamp={props.data.launch_date_unix} />
                </p>
                <p className="capsule-data">
                    <span className="card-heading">Launch success: </span>
                    {props.data.launch_success ? 'Yes' : 'No'}
                </p>
            </div>
        </a>
    );
}

export default LaunchesListCard;
