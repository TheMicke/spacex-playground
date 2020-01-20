import React from 'react';
import '../_css/list-view.css';

function RocketsListCard(props) {
    return (
        <a href={'/rockets/' + props.data.rocket_id}>
            <div className="list-card">
                <h3>{props.data.rocket_name}</h3>
            </div>
        </a>
    );
}

export default RocketsListCard;
