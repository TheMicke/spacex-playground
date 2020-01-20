import React from 'react';
import UnixTimeConverter from '../_common/UnixTimeConverter';

function HistoryDetailsContent(props) {
    let history = props.history;

    return (
        <div>
            <h3>{history.title}</h3>
            <p>
                Date: <UnixTimeConverter timestamp={history.event_date_unix} />
            </p>
            <p>Flight number: {history.flight_number}</p>
            <p>Details: {history.details}</p>
        </div>
    );
}

export default HistoryDetailsContent;
