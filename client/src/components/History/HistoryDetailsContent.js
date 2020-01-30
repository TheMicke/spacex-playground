import React from 'react';
import LinkRow from '../_common/LinkRow';
import LinkIcon from '../_common/LinkIcon';
import UnixTimeConverter from '../_common/UnixTimeConverter';
import '../_css/details-view.css';
import '../_css/component-general.css';

import DefaultBackButton from '../_common/DefaultBackButton';

function HistoryDetailsContent(props) {
    console.log('HistoryDetailsContent', props);
    let history = props.history;

    return (
        <div className="page-content-container">
            <DefaultBackButton />
            <div className="data-block">
                <h3><span className="details-text-heading">{history.title}</span></h3>
                <LinkRow links={[
                    history.links?.reddit ? <LinkIcon key={history.links?.reddit} href={history.links?.reddit} linkType="reddit" /> : '',
                    history.links?.article ? <LinkIcon key={history.links?.article} href={history.links?.article} linkType="article" /> : '',
                    history.links?.wikipedia ? <LinkIcon key={history.links?.wikipedia} href={history.links?.wikipedia} linkType="wikipedia" /> : '',
                ]}/>
                <p><span className="details-text-heading">Date: </span><UnixTimeConverter timestamp={history.event_date_unix} /></p>
                <p><span className="details-text-heading">Flight number: </span>{history.flight_number ? <a href={"/launches/"+history.flight_number}>{history.flight_number}</a> : '-'}</p>
                <p><span className="details-text-heading">Details: </span>{history.details}</p>
            </div>
        </div>
    );
}

export default HistoryDetailsContent;
