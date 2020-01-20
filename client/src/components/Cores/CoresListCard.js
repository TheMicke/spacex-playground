import React from 'react';
import '../_css/list-view.css';

import UnixTimeConverter from '../_common/UnixTimeConverter';

function CoresListCard(props) {
    return (
        <a href={'/cores/' + props.data.core_serial}>
            <div className="list-card">
                <p>
                    <span className="card-heading">Serial:</span> {props.data.core_serial}
                </p>
                <p>
                    <span className="card-heading">Missions:</span> {props.data.missions.length}
                </p>
                <p>
                    <span className="card-heading">Status:</span> {props.data.status}
                </p>
                <p>
                    <span className="card-heading">First launch:</span> <UnixTimeConverter timestamp={props.data.original_launch_unix} />
                </p>
            </div>
        </a>
    );
}

export default CoresListCard;
