import React from 'react';
import styled from 'styled-components';
import '../_css/details-view.css';
import '../_css/component-general.css';

const InfoLink = styled.a`
    display: block;
    margin: 5px auto;
`;

function APIinfoContent(props) {
    const api = props.data;

    return (
            <div className="data-block data-block-half">
                <h2 className="details-heading">API Info</h2>
                <p><span className="details-text-heading">Project name: </span>{api.project_name}</p>
                <p><span className="details-text-heading">Version: </span>{api.version}</p>
                <p><span className="details-text-heading">Organization: </span><a href={api.organization_link}>{api.organization}</a></p>
                <p><span className="details-text-heading">Description: </span>{api.description}</p>
                <p><span className="details-text-heading">Links:</span> <br />
                    <InfoLink href={api.project_link} target="_blank" rel="noopener noreferrer"> Project <br /></InfoLink>
                    <InfoLink href={api.organization_link} target="_blank" rel="noopener noreferrer"> Organization <br /></InfoLink>
                    <InfoLink href={api.docs} target="_blank" rel="noopener noreferrer"> Docs <br /></InfoLink>
                </p>
            </div>
    );
}

export default APIinfoContent;
