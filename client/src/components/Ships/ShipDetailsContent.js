import React from 'react';
import ThumbnailGrid from '../_common/ThumbnailGrid';
import LinkIcon from '../_common/LinkIcon';

function ShipDetailsContent(props) {
    console.log(props.ship);
    const ship = props.ship;
    const shipImage = [ship.image];

    return (
        <div>
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

            <h4>Missions:</h4>
            <p>
                {ship.missions?.map(mission => (
                    <a key={mission.flight} href={'/launches/' + mission.flight}>{mission.name}<br /></a>
                ))}
            </p>

            <h4>Links:</h4>
            <p><LinkIcon href={ship.url} /></p>

            {ship.image ? props.waitingForImages ? '' : <ThumbnailGrid images={shipImage} /> : ''}
        </div>
    );
}

export default ShipDetailsContent;
