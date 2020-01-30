import React from 'react';
import '../_css/list-view.css';

import UnixTimeConverter from '../_common/UnixTimeConverter';

function DragonsListCard(props) {
    return (
        <a href={'/history/' + props.data.id}>
            <div className="list-card">
                <h3>{props.data.title}</h3>
                <p>
                    <span className="card-heading">Date: </span>
                    <UnixTimeConverter timestamp={props.data.event_date_unix} />
                </p>
            </div>
        </a>
    );
}

export default DragonsListCard;
