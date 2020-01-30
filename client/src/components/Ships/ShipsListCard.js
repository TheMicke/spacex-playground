import React from 'react';
import '../_css/list-view.css';

function ShipsListCard(props) {
    return (
        <a href={'/ships/' + props.data.ship_id}>
            <div className="list-card">
                <h3>{props.data.ship_name}</h3>
                <p><span className="card-heading">Active: </span>{props.data.active ? 'Yes' : 'No'}</p>
            </div>
        </a>
    );
}

export default ShipsListCard;
