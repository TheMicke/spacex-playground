import React from 'react';
import LinkIcon from '../_common/LinkIcon';
import '../_css/details-view.css';
import '../_css/component-general.css';
import DefaultBackButton from '../_common/DefaultBackButton';

function LaunchPadDetailsContent(props) {
    let launchPad = props.data;
    
    return (
        <div className="page-content-container">
            <DefaultBackButton />
            <div className="data-block">
                <h2 className="details-heading">{launchPad.name}</h2>
                <p><span className="details-text-heading">Full name: </span>{launchPad.site_name_long}</p>
                <p><span className="details-text-heading">Launch Pad id: </span>{launchPad.site_id}</p>
                <p><span className="details-text-heading">Status: </span>{launchPad.status}</p>
                <p><span className="details-text-heading">Location: </span>{launchPad.location?.name}, {launchPad.location?.region}</p>
                <p><span className="details-text-heading">Location Lat: </span>{launchPad.location?.latitude} Long: {launchPad.location?.longitude}</p>
                <p><span className="details-text-heading">Attempted launchs: </span>{launchPad.attempted_launches}</p>
                <p><span className="details-text-heading">Successful launchs: </span>{launchPad.successful_launches}</p>
                <p><span className="details-text-heading">Launch success rate: </span>{
                    isNaN(((launchPad.successful_launches / launchPad.attempted_launches) * 100).toFixed(2)) ? 
                    '-'
                    :
                    ((launchPad.successful_launches / launchPad.attempted_launches) * 100).toFixed(2) + ' %'}
                </p>
                <p><span className="details-text-heading">Launched vehicles: </span>{launchPad.vehicles_launched?.map(vehicle => <a href={"/rockets/"+(vehicle.toLowerCase().replace(/\s/g, ''))} key={vehicle}>{vehicle}, </a>)}</p>
                <p><span className="details-text-heading">Details: </span>{launchPad.details}</p>
                <p><span className="details-text-heading">Links: </span><LinkIcon href={launchPad.wikipedia} linkType="wikipedia" /></p>

            </div>
        </div>
    );
}

export default LaunchPadDetailsContent;
