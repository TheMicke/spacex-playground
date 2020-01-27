import React from 'react';
import '../_css/details-view.css';

function APIinfoContent(props) {
    console.log('APIinfoContent', props);
    const api = props.data;

    return (
        <div className="info-block">
            <h2>API Info</h2>
            <p><span className="info-text-heading">Project name: </span>{api.project_name}</p>
            <p><span className="info-text-heading">Version: </span>{api.version}</p>
            <p>
            <span className="info-text-heading">Organization: </span><a href={api.organization_link}>{api.organization}</a>
            </p>
            <p><span className="info-text-heading">Description: </span>{api.description}</p>
            <p>
            <span className="info-text-heading">Links:</span> <br />
                <a href={api.project_link} target="_blank" rel="noopener noreferrer"> Project <br /></a>
                <a href={api.organization_link} target="_blank" rel="noopener noreferrer"> Organization <br /></a>
                <a href={api.docs} target="_blank" rel="noopener noreferrer"> Docs <br /></a>
            </p>
        </div>
    );
}

export default APIinfoContent;
