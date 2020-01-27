import React from 'react';
import LinkIcon from '../_common/LinkIcon';
import '../_css/details-view.css';

function LaunchPadDetailsContent(props) {
    console.log('LaunchPadDetailsContent', props);
    let launchPad = props.data;
    
    return (
        <div className="info-block">
            <h3>{launchPad.name}</h3>
            <p>Full name: {launchPad.site_name_long}</p>
            <p>Launch Pad id: {launchPad.site_id}</p>
            <p>Status: {launchPad.status}</p>
            <p>Location: {launchPad.location?.name}, {launchPad.location?.region}</p>
            <p>Location Lat: {launchPad.location?.latitude} Long: {launchPad.location?.longitude}</p>
            <p>Attempted launchs: {launchPad.attempted_launches}</p>
            <p>Successful launchs: {launchPad.successful_launches}</p>
            <p>Launch success rate: {
                isNaN(((launchPad.successful_launches / launchPad.attempted_launches) * 100).toFixed(2)) ? 
                '-'
                :
                ((launchPad.successful_launches / launchPad.attempted_launches) * 100).toFixed(2) + ' %'}
            </p>
            <p>Launched vehicles: {launchPad.vehicles_launched?.map(vehicle => <a href={"/rockets/"+(vehicle.toLowerCase().replace(/\s/g, ''))} key={vehicle}>{vehicle}, </a>)}</p>
            <p>Details: {launchPad.details}</p>
            <p>Links: <LinkIcon href={launchPad.wikipedia} linkType="wikipedia" /></p>

        </div>
    );
}

export default LaunchPadDetailsContent;
