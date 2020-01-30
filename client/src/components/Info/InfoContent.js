import React from 'react';
import LinkIcon from '../_common/LinkIcon';
import '../_css/details-view.css';
import '../_css/component-general.css';
import DefaultBackButton from '../_common/DefaultBackButton';

function InfoContent(props) {
    const info = props.info;

    return (
        <div className="page-content-container">
            <div className="data-block">
                <h2>{info.name} company info</h2>
                <p>{info.summary}</p>
                <p><span className="details-text-heading">Founder: </span>{info.founder}</p>
                <p><span className="details-text-heading">Founded: </span>{info.founded}</p>
                <p><span className="details-text-heading">Employees: </span>{info.employees}</p>
                <p><span className="details-text-heading">Launch sites: </span>{info.launch_sites}</p>
                <p><span className="details-text-heading">Test sites: </span>{info.test_sites}</p>
                <p><span className="details-text-heading">CEO: </span>{info.ceo}</p>
                <p><span className="details-text-heading">CTO: </span>{info.cto}</p>
                <p><span className="details-text-heading">COO: </span>{info.coo}</p>
                <p><span className="details-text-heading">CTO of Propulsion: </span>{info.cto_propulsion}</p>
                <p><span className="details-text-heading">Valuation: </span>${info.valuation}</p>
                <p><span className="details-text-heading">Headquarters: </span>{info.headquarters?.city}, {info.headquarters?.state}</p>
                
                <p><span className="details-text-heading">Links: </span> <br />
                    <LinkIcon linkType="website" href={info.links?.website} />
                    <LinkIcon linkType="flickr" href={info.links?.flickr} />
                    <LinkIcon linkType="twitter" href={info.links?.twitter} />
                </p>
            </div>
        </div>
    );
}

export default InfoContent;
