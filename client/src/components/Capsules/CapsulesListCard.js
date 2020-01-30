import React from 'react';
import '../_css/list-view.css';

import UnixTimeConverter from '../_common/UnixTimeConverter';

function CapsulesListCard(props) {
    return (
        <a href={"/capsules/" + props.data.capsule_serial}>
            <div className="list-card">
                    <h3>{props.data.capsule_serial}</h3>
                    <p className="capsule-data"><span className="card-heading">First Launch: </span>{ props.data.original_launch_unix ? <UnixTimeConverter timestamp={props.data.original_launch_unix} /> : '-' }</p>
                    <p className="capsule-data"><span className="card-heading">Status: </span>{props.data.status}</p>
            </div>
        </a>
    );
}

export default CapsulesListCard;
