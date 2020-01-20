import React from 'react';
import styled from 'styled-components';
import '../_css/list-view.css';

function DragonsListCard(props) {
    return (
        <a href={'/dragons/' + props.data.id}>
            <div className="list-card">
                <h3>{props.data.name}</h3>
                <p>
                    <span className="card-heading">First flight: </span>
                    {props.data.first_flight}
                </p>
            </div>
        </a>
    );
}

export default DragonsListCard;
