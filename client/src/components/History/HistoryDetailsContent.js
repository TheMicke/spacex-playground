import React from 'react';
import LinkRow from '../_common/LinkRow';
import LinkIcon from '../_common/LinkIcon';
import UnixTimeConverter from '../_common/UnixTimeConverter';
import '../_css/details-view.css';
import '../_css/component-general.css';

import DefaultBackButton from '../_common/DefaultBackButton';

function HistoryDetailsContent(props) {
    let history = props.history;

    return (
        <div className="page-content-container">
            <div className="only-back-button">
                <DefaultBackButton url="/history"/>
            </div>
            
            <div className="data-block data-block-full">
                <h2 className="details-heading">{history.title}</h2>
                <LinkRow links={[
                    history.links?.reddit ? <LinkIcon key={history.links?.reddit} href={history.links?.reddit} linkType="reddit" hoverText="Reddit" /> : '',
                    history.links?.article ? <LinkIcon key={history.links?.article} href={history.links?.article} linkType="article" hoverText="Article" /> : '',
                    history.links?.wikipedia ? <LinkIcon key={history.links?.wikipedia} href={history.links?.wikipedia} linkType="wikipedia" hoverText="Wikipedia" /> : '',
                ]}/>
                <p><span className="details-text-heading">Date: </span><UnixTimeConverter timestamp={history.event_date_unix} /></p>
                <p><span className="details-text-heading">Flight number: </span>{history.flight_number ? <a href={"/launches/"+history.flight_number}>{history.flight_number}</a> : '-'}</p>
                <p><span className="details-text-heading">Details: </span>{history.details}</p>
            </div>
        </div>
    );
}

export default HistoryDetailsContent;
