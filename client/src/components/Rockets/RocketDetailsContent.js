import React from 'react';
import ThumbnailGrid from '../_common/ThumbnailGrid';
import '../_css/details-view.css';
import '../_css/component-general.css';
import DefaultBackButton from '../_common/DefaultBackButton';

function RocketDetailsContent(props) {
    console.log('RocketDetailsContent', props);
    const rocket = props.rocket;
    return (
        <div className="page-content-container">
            <DefaultBackButton />
            <div className="data-block">
                <div className="data-inner-block">
                    <h3 className="details-text-heading">{rocket.rocket_name}</h3>
                    <p><span className="details-text-heading">Status: </span>{rocket.active}</p>
                    <p><span className="details-text-heading">First flight: </span>{rocket.first_flight}</p>
                    <p><span className="details-text-heading">Cost per launch: </span>${rocket.cost_per_launch}</p>
                    <p><span className="details-text-heading">Launch success: </span>{rocket.success_rate_pct}%</p>
                    <p><span className="details-text-heading">Company: </span>{rocket.company}</p>
                    <p><span className="details-text-heading">Country: </span>{rocket.country}</p>
                    <p><span className="details-text-heading">Height: </span>{rocket.height?.meters} m | {rocket.height?.feet} ft</p>
                    <p><span className="details-text-heading">Diameter: </span>{rocket.diameter?.meters} m | {rocket.diameter?.feet} ft</p>
                    <p><span className="details-text-heading">Mass: </span>{rocket.mass?.kg} kg | {rocket.mass?.lb} lbs</p>
                </div>
                
                <div className="data-inner-block">
                    <h4 className="details-text-heading">First stage</h4>
                    <p><span className="details-text-heading">Reusable: </span>{rocket.first_stage?.reusable ? 'Yes' : 'No'}</p>
                    <p><span className="details-text-heading">Engines: </span>{rocket.first_stage?.engines}</p>
                    <p><span className="details-text-heading">Fuel (tons): </span>{rocket.first_stage?.fuel_amount_tons}</p>
                    <p><span className="details-text-heading">Burn time: </span>{rocket.first_stage?.burn_time_sec} seconds</p>
                    <p><span className="details-text-heading">Thrust (sea level): </span>{rocket.first_stage?.thrust_sea_level?.kN} kN | {rocket.first_stage?.thrust_sea_level?.lbf} lbf</p>
                    <p><span className="details-text-heading">Thrust (vacuum): </span>{rocket.first_stage?.thrust_vacuum.kN} kN | {rocket.first_stage?.thrust_vacuum.lbf} lbf</p> 
                </div>

                <div className="data-inner-block">
                    <h4 className="details-text-heading">Second stage</h4>
                    <p><span className="details-text-heading">Reusable: </span>{rocket.second_stage?.reusable ? 'Yes' : 'No'}</p>
                    <p><span className="details-text-heading">Engines: </span>{rocket.second_stage?.engines}</p>
                    <p><span className="details-text-heading">Fuel (tons): </span>{rocket.second_stage?.fuel_amount_tons}</p>
                    <p><span className="details-text-heading">Burn time: </span>{rocket.second_stage?.burn_time_sec} seconds</p>
                    <p><span className="details-text-heading">Thrust (sea level): </span>{rocket.second_stage?.thrust.kN} kN | {rocket.second_stage?.thrust?.lbf} lbf</p>
                </div>
            

            </div>
            {props.waitingForImages ? '' : <ThumbnailGrid images={rocket.flickr_images} />}
        </div>
    );
}

export default RocketDetailsContent;
