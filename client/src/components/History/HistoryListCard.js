import React from 'react';
import styled from 'styled-components';
import '../_css/list-view.css';

import UnixTimeConverter from '../_common/UnixTimeConverter';

const CardHeader = styled.h3`
    font-weight: 700;
`;

const CardDataHeading = styled.span`
    font-weight: 700;
`;

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
