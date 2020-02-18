import React from 'react';
import '../_css/list-view.css';

import UnixTimeConverter from '../_common/UnixTimeConverter';

function CoresListCard(props) {
    return (
        <a href={'/cores/' + props.data.core_serial}>
            <div className="list-card">
                <h3 className="list-card-title">{props.data.core_serial}</h3>
                <p><span className="list-card-heading">First launch: </span><UnixTimeConverter timestamp={props.data.original_launch_unix} /></p>
            </div>
        </a>
    );
}

export default CoresListCard;
