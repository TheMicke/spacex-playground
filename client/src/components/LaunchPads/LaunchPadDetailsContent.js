import React from 'react';
import LinkIcon from '../_common/LinkIcon';

function LaunchPadDetailsContent(props) {
    console.log(props);
    let launchPad = props.data;
    
    return (
        <div>
            <h3>{launchPad.name}</h3>
            <p>Full name: {launchPad.site_name_long}</p>
            <p>Launch Pad id: {launchPad.site_id}</p>
            <p>Status: {launchPad.status}</p>
            <p>Location: {launchPad.location?.name}, {launchPad.location?.region}</p>
            <p>Location latitude: {launchPad.location?.latitude} longitude: {launchPad.location?.longitude}</p>
            <p>Attempted launchs: {launchPad.attempted_launches}</p>
            <p>Successful launchs: {launchPad.successful_launches}</p>
            <p>launch success rate: {
                isNaN(((launchPad.successful_launches / launchPad.attempted_launches) * 100).toFixed(2)) ? 
                '-'
                :
                ((launchPad.successful_launches / launchPad.attempted_launches) * 100).toFixed(2) + ' %'}
            </p>
            <p>Launched vehicles: {launchPad.vehicles_launched + ','} </p>
            <p>Details: {launchPad.details}</p>
            <p>Links: <LinkIcon href={launchPad.wikipedia} linkType="wikipedia" /></p>

        </div>
    );
}

export default LaunchPadDetailsContent;
