import React from 'react';
import LinkIcon from '../_common/LinkIcon';
import '../_css/details-view.css';

function InfoContent(props) {
    const info = props.info;

    return (
        <div className="info-block">
            <h2>{info.name} company info</h2>
            <p>{info.summary}</p>
            <p><span className="info-text-heading">Founder: </span>{info.founder}</p>
            <p><span className="info-text-heading">Founded: </span>{info.founded}</p>
            <p><span className="info-text-heading">Employees: </span>{info.employees}</p>
            <p><span className="info-text-heading">Launch sites: </span>{info.launch_sites}</p>
            <p><span className="info-text-heading">Test sites: </span>{info.test_sites}</p>
            <p><span className="info-text-heading">CEO: </span>{info.ceo}</p>
            <p><span className="info-text-heading">CTO: </span>{info.cto}</p>
            <p><span className="info-text-heading">COO: </span>{info.coo}</p>
            <p><span className="info-text-heading">CTO of Propulsion: </span>{info.cto_propulsion}</p>
            <p><span className="info-text-heading">Valuation: </span>${info.valuation}</p>
            <p><span className="info-text-heading">Headquarters: </span>{info.headquarters?.city}, {info.headquarters?.state}</p>
            
            <p><span className="info-text-heading">Links: </span> <br />
                <LinkIcon linkType="website" href={info.links?.website} />
                <LinkIcon linkType="flickr" href={info.links?.flickr} />
                <LinkIcon linkType="twitter" href={info.links?.twitter} />
            </p>
            
            <br />
        </div>
    );
}

export default InfoContent;
