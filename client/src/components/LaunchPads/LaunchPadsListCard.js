import React from 'react';
import '../_css/list-view.css';

function LaunchPadsListCard(props) {
    return (
        <a href={'/launch_pads/' + props.data.site_id}>
            <div className="list-card">
                <h3>{props.data.name}</h3>
                <p>
                    {props.data.location.name}, {props.data.location.region}
                </p>
            </div>
        </a>
    );
}

export default LaunchPadsListCard;
