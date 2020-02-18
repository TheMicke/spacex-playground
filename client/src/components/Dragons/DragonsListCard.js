import React from 'react';
import '../_css/list-view.css';

function DragonsListCard(props) {
    return (
        <a href={'/dragons/' + props.data.id}>
            <div className="list-card">
                <h3 className="list-card-title">{props.data.name}</h3>
                <p>
                    <span className="list-card-heading">First flight: </span>
                    {props.data.first_flight}
                </p>
            </div>
        </a>
    );
}

export default DragonsListCard;
