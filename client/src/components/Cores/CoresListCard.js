import React from 'react';
import '../_css/list-view.css';

import UnixTimeConverter from '../_common/UnixTimeConverter';

function CoresListCard(props) {
    return (
        <a href={'/cores/' + props.data.core_serial}>
            <div className="list-card">
                <p>{props.data.core_serial}</p>
                <p>First launch: <UnixTimeConverter timestamp={props.data.original_launch_unix} /></p>
            </div>
        </a>
    );
}

export default CoresListCard;
