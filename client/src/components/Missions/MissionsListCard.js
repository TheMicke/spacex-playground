import React from 'react';
import '../_css/list-view.css';

function MissionsListCard(props) {

    console.log(props);

    return (
        <a href={'/missions/' + props.data.mission_id}>
            <div className="list-card">
                <h3>{props.data.mission_name}</h3>
            </div>
        </a>
    );
}

export default MissionsListCard;
