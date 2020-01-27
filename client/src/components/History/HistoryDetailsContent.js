import React from 'react';
import LinkRow from '../_common/LinkRow';
import LinkIcon from '../_common/LinkIcon';
import UnixTimeConverter from '../_common/UnixTimeConverter';
import '../_css/details-view.css';

function HistoryDetailsContent(props) {
    console.log('HistoryDetailsContent', props);
    let history = props.history;

    return (
        <div className="info-block">
            <h3>{history.title}</h3>
            <LinkRow links={[
                history.links?.reddit ? <LinkIcon key={history.links?.reddit} href={history.links?.reddit} linkType="reddit" /> : '',
                history.links?.article ? <LinkIcon key={history.links?.article} href={history.links?.article} linkType="article" /> : '',
                history.links?.wikipedia ? <LinkIcon key={history.links?.wikipedia} href={history.links?.wikipedia} linkType="wikipedia" /> : '',
            ]}/>
            <p>Date: <UnixTimeConverter timestamp={history.event_date_unix} /></p>
            <p>Flight number: {history.flight_number ? <a href={"/launches/"+history.flight_number}>{history.flight_number}</a> : '-'}</p>
            <p>Details: {history.details}</p>
        </div>
    );
}

export default HistoryDetailsContent;
