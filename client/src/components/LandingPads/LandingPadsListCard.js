import React from 'react';
import '../_css/list-view.css';

function LandingPadsListCard(props) {
    return (
        <a href={'/landing_pads/' + props.data.id}>
            <div className="list-card">
                <h3 className="list-card-title">{props.data.full_name}</h3>
                <p>
                    {props.data.location.name}, {props.data.location.region}
                </p>
            </div>
        </a>
    );
}

export default LandingPadsListCard;
