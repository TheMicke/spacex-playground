import React from 'react';
import ThumbnailGrid from '../_common/ThumbnailGrid';
import LinkIcon from '../_common/LinkIcon';
import '../_css/details-view.css';

function ShipDetailsContent(props) {
    console.log('ShipDetailsContent', props);
    const ship = props.ship;
    const shipImage = [ship.image];

    return (
        <div className="content-container">
            <div className="data-block">
                <h3>{ship.ship_name}</h3>
                {ship.ship_id ? <p><span className="text-heading">Ship id: </span>{ship.ship_id} </p> : ''}
                {ship.active ? <p><span className="text-heading">Active: </span>{ship.active ? 'Yes' : 'No'}</p> : ''}
                {ship.type !== '' ? <p><span className="text-heading">Type: </span>{ship.ship_type}</p> : ''}
                {ship.roles ? <p><span className="text-heading">Roles: </span>{ship.ship_type}</p> : ''}
                {ship.year_built ? <p><span className="text-heading">Built: </span>{ship.year_built}</p> : ''}
                {ship.weight_kg ? (<p><span className="text-heading">Weight: </span>{ship.weight_kg} kg | {ship.weight_lbs} lbs</p>) : ''}
                {ship.home_port ? <p><span className="text-heading">Home port: </span>{ship.home_port}</p> : ''}

                {ship.attempted_catches ? <p><span className="text-heading">Attempted catches: </span>{ship.attempted_catches} </p> : ''}
                {ship.successful_catches ? <p><span className="text-heading">Successful catches: </span>{ship.successful_catches} </p> : ''}
                {ship.attempted_catches ? <p><span className="text-heading">Success rate: </span>{((ship.successful_catches / ship.attempted_catches)*100).toFixed(2)} %</p> : ''}
                
                {ship.attempted_landings ? <p><span className="text-heading">Attempted landings: </span>{ship.attempted_landings} </p> : ''}
                {ship.successful_landings ? <p><span className="text-heading">Successful landings: </span>{ship.successful_landings} </p> : ''}
                {ship.attempted_landings ? <p><span className="text-heading">Success rate: </span>{((ship.successful_landings / ship.attempted_landings)*100).toFixed(2)} %</p> : ''}

                
                <p>{ship.attempted_landings ? 'Attempted landings: ' + ship.attempted_landings : ''}</p>
                <p>{ship.successful_landings ? 'Attempted landings: ' + ship.successful_landings : ''}</p>
                <p>{ship.attempted_landings ? 'Success rate: ' + ((ship.successful_landings / ship.attempted_landings) * 100).toFixed(2) + ' %' : ''}</p>

                {ship.missions?.length > 0 ? <p><span className="text-heading">Missions: </span> 
                {ship.missions?.map(mission => (
                        <a key={mission.flight} href={'/launches/' + mission.flight}>{mission.name}, </a>
                    ))}
                </p> : ''}

                {ship.url ? <p><span className="text-heading">Links:</span> <LinkIcon href={ship.url} /></p> : ''}
            </div>

            {ship.image ? props.waitingForImages ? '' : <ThumbnailGrid images={shipImage} /> : ''}
        </div>
    );
}

export default ShipDetailsContent;
