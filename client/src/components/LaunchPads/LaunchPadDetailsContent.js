import React from 'react';
import LinkIcon from '../_common/LinkIcon';
import '../_css/details-view.css';

function LaunchPadDetailsContent(props) {
    console.log('LaunchPadDetailsContent', props);
    let launchPad = props.data;
    
    return (
        <div className="content-container">
            <div className="data-block">
                <h3>{launchPad.name}</h3>
                <p><span className="text-heading">Full name: </span>{launchPad.site_name_long}</p>
                <p><span className="text-heading">Launch Pad id: </span>{launchPad.site_id}</p>
                <p><span className="text-heading">Status: </span>{launchPad.status}</p>
                <p><span className="text-heading">Location: </span>{launchPad.location?.name}, {launchPad.location?.region}</p>
                <p><span className="text-heading">Location Lat: </span>{launchPad.location?.latitude} Long: {launchPad.location?.longitude}</p>
                <p><span className="text-heading">Attempted launchs: </span>{launchPad.attempted_launches}</p>
                <p><span className="text-heading">Successful launchs: </span>{launchPad.successful_launches}</p>
                <p><span className="text-heading">Launch success rate: </span>{
                    isNaN(((launchPad.successful_launches / launchPad.attempted_launches) * 100).toFixed(2)) ? 
                    '-'
                    :
                    ((launchPad.successful_launches / launchPad.attempted_launches) * 100).toFixed(2) + ' %'}
                </p>
                <p><span className="text-heading">Launched vehicles: </span>{launchPad.vehicles_launched?.map(vehicle => <a href={"/rockets/"+(vehicle.toLowerCase().replace(/\s/g, ''))} key={vehicle}>{vehicle}, </a>)}</p>
                <p><span className="text-heading">Details: </span>{launchPad.details}</p>
                <p><span className="text-heading">Links: </span><LinkIcon href={launchPad.wikipedia} linkType="wikipedia" /></p>

            </div>
        </div>
    );
}

export default LaunchPadDetailsContent;
