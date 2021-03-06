import React from 'react';
import '../_css/list-view.css';

function PayloadsListCard(props) {
    return (
        <a href={'/payloads/' + props.data.payload_id}>
            <div className="list-card">
                <h3 className="list-card-title">{props.data.payload_id}</h3>
            </div>
        </a>
    );
}

export default PayloadsListCard;
