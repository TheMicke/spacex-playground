import React from 'react';
import ThumbnailGrid from '../_common/ThumbnailGrid';
import '../_css/details-view.css';

function RocketDetailsContent(props) {
    console.log('RocketDetailsContent', props);
    const rocket = props.rocket;
    return (
        <div>
            <div className="info-text">
                <div className="info-inner-block">
                    <h3>{rocket.rocket_name}</h3>
                    <p>Status: {rocket.active}</p>
                    <p>First flight: {rocket.first_flight}</p>
                    <p>Cost per launch: ${rocket.cost_per_launch}</p>
                    <p>Launch success: {rocket.success_rate_pct}%</p>
                    <p>Company: {rocket.company}</p>
                    <p>Country: {rocket.country}</p>
                    <p>Height: {rocket.height?.meters} m | {rocket.height?.feet} ft</p>
                    <p>Diameter: {rocket.diameter?.meters} m | {rocket.diameter?.feet} ft</p>
                    <p>Mass: {rocket.mass?.kg} kg | {rocket.mass?.lb} lbs</p>
                </div>
                
                <div className="info-inner-block">
                    <h4>First stage</h4>
                    <p>Reusable: {rocket.first_stage?.reusable ? 'Yes' : 'No'}</p>
                    <p>Engines: {rocket.first_stage?.engines}</p>
                    <p>Fuel (tons): {rocket.first_stage?.fuel_amount_tons}</p>
                    <p>Burn time: {rocket.first_stage?.burn_time_sec} seconds</p>
                    <p>Thrust (sea level): {rocket.first_stage?.thrust_sea_level?.kN} kN | {rocket.first_stage?.thrust_sea_level?.lbf} lbf</p>
                    <p>Thrust (vacuum): {rocket.first_stage?.thrust_vacuum.kN} kN | {rocket.first_stage?.thrust_vacuum.lbf} lbf</p> 
                </div>

                <div className="info-inner-block">
                    <h4>Second stage</h4>
                    <p>Reusable: {rocket.second_stage?.reusable ? 'Yes' : 'No'}</p>
                    <p>Engines: {rocket.second_stage?.engines}</p>
                    <p>Fuel (tons): {rocket.second_stage?.fuel_amount_tons}</p>
                    <p>Burn time: {rocket.second_stage?.burn_time_sec} seconds</p>
                    <p>Thrust (sea level): {rocket.second_stage?.thrust.kN} kN | {rocket.second_stage?.thrust?.lbf} lbf</p>
                </div>
            

            </div>
            {props.waitingForImages ? '' : <ThumbnailGrid images={rocket.flickr_images} />}
        </div>
    );
}

export default RocketDetailsContent;
