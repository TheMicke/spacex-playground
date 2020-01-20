import React from 'react';
import styled from 'styled-components';
import '../_css/list-view.css';

import UnixTimeConverter from '../_common/UnixTimeConverter';

function CapsulesListCard(props) {
    return (
        <div className="list-card">
            <h3>{props.data.capsule_serial}</h3>
            
            <p className="capsule-data"><span className="card-heading">First Launch: </span>{ props.data.original_launch_unix ? <UnixTimeConverter timestamp={props.data.original_launch_unix} /> : '-' }</p>
            <p className="capsule-data"><span className="card-heading">Status: </span>{props.data.status}</p>
            <p className="capsule-data"><span className="card-heading">Missions: </span>{props.data.missions.length}</p>
            <p className="capsule-data"><span className="card-heading">Type: </span>{props.data.type}</p>
            <p className="capsule-data"><span className="card-heading">Reuses: </span>{props.data.reuse_count}</p>
            <p className="capsule-data"><span className="card-heading">Details: </span>{props.data.details}</p>
        </div>
    );
}

export default CapsulesListCard;
