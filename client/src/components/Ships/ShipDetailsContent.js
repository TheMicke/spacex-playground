import React from 'react';
import ThumbnailGrid from '../_common/ThumbnailGrid';
import LinkIcon from '../_common/LinkIcon';
import '../_css/details-view.css';

function ShipDetailsContent(props) {
    console.log('ShipDetailsContent', props);
    const ship = props.ship;
    const shipImage = [ship.image];

    return (
        <div>
            <div className="info-text">
                <h3>{ship.ship_name}</h3>
                {ship.ship_id ? <p>Ship id: {ship.ship_id} </p> : ''}
                {ship.active ? <p>Active: {ship.active ? 'Yes' : 'No'}</p> : ''}
                {ship.type !== '' ? <p>Type: {ship.ship_type}</p> : ''}
                {ship.roles ? <p>Roles: {ship.ship_type}</p> : ''}
                {ship.year_built ? <p>Built: {ship.year_built}</p> : ''}
                {ship.weight_kg ? (<p>Weight: {ship.weight_kg} kg | {ship.weight_lbs} lbs</p>) : ''}
                {ship.home_port ? <p>Home port: {ship.home_port}</p> : ''}

                <p>{ship.attempted_catches ? 'Attempted catches: ' + ship.attempted_catches : ''}</p>
                <p>{ship.successful_catches ? 'Attempted catches: ' + ship.successful_catches : ''}</p>
                <p>{ship.attempted_catches ? 'Success rate: ' + ((ship.successful_catches / ship.attempted_catches) * 100).toFixed(2) + ' %' : ''}</p>
                
                <p>{ship.attempted_landings ? 'Attempted landings: ' + ship.attempted_landings : ''}</p>
                <p>{ship.successful_landings ? 'Attempted landings: ' + ship.successful_landings : ''}</p>
                <p>{ship.attempted_landings ? 'Success rate: ' + ((ship.successful_landings / ship.attempted_landings) * 100).toFixed(2) + ' %' : ''}</p>

                <h4>Missions:</h4>
                <p>
                    {ship.missions?.map(mission => (
                        <a key={mission.flight} href={'/launches/' + mission.flight}>{mission.name}<br /></a>
                    ))}
                </p>

                {ship.url ? <h4>Links:</h4> : ''}
                {ship.url ? <p><LinkIcon href={ship.url} /></p> : ''}
            </div>

            {ship.image ? props.waitingForImages ? '' : <ThumbnailGrid images={shipImage} /> : ''}
        </div>
    );
}

export default ShipDetailsContent;
