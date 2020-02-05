import React from 'react';
import LinkIcon from '../_common/LinkIcon';
import ThumbnailGrid from '../_common/ThumbnailGrid';
import TemperatureConverter from '../_common/TemperatureConverter';
import LoaderSpinner from '../_common/LoaderSpinner';
import DefaultBackButton from '../_common/DefaultBackButton';
import '../_css/details-view.css';
import '../_css/component-general.css';


function DragonDetailsContent(props) {
    const dragon = props.dragon;
    let thrustCounter = 1;

    return (
        <div className="page-content-container">
            <DefaultBackButton />
            <div>
                <h2 className="details-heading">{dragon.name}</h2>
                <LinkIcon href={dragon.wikipedia} linkType="wikipedia" />
                <div className="data-block-container">
                    <div className="data-block data-block-thirds">
                        <h3 className="details-text-heading">General</h3>
                        <p><span className="details-text-heading">First flight:</span> {dragon.first_flight}</p>
                        <p><span className="details-text-heading">ID:</span> {dragon.id}</p>
                        <p><span className="details-text-heading">Type:</span> {dragon.type}</p>
                        <p><span className="details-text-heading">Active:</span> {dragon.active ? 'Yes' : 'No'}</p>
                        <p><span className="details-text-heading">Crew capacity:</span> {dragon.crew_capacity}</p>
                        <p><span className="details-text-heading">Height (incl trunk):</span> {dragon.height_w_trunk?.meters} m | {dragon.height_w_trunk?.feet} ft</p>
                        <p><span className="details-text-heading">Diameter:</span> {dragon.diameter?.meters} m | {dragon.diameter?.feet} ft</p>
                        <p><span className="details-text-heading">Sidewall angel:</span> {dragon.sidewall_angle_deg}°</p>
                        <p><span className="details-text-heading">Orbit duration:</span> {dragon.orbit_duration_yr} year(s)</p>
                        <p><span className="details-text-heading">Dry mass:</span> {dragon.dry_mass_kg} kg | {dragon.dry_mass_lb} lb</p>
                    </div>

                    <div className="data-block data-block-thirds">
                        <h3 className="details-text-heading">Thrusters</h3>
                        {dragon.thrusters?.map(thruster => 
                            <div key={'thruster'+thruster.type+thruster.thrust.kN+thrustCounter}>
                                <p className="details-text-heading">Thurster {thrustCounter++}</p>
                                <p><span className="details-text-heading">Type:</span> {thruster.type}</p>
                                <p><span className="details-text-heading">Amount:</span> {thruster.amount}</p>
                                <p><span className="details-text-heading">Pods:</span> {thruster.pods}</p>
                                <p><span className="details-text-heading">Fuel 1:</span> {thruster.fuel_1}</p>
                                <p><span className="details-text-heading">Fuel 2:</span> {thruster.fuel_2}</p>
                                <p><span className="details-text-heading">Thrust:</span> {thruster.thrust.kN} kN | {thruster.thrust.lbf} lbf</p>
                                <br />
                            </div>
                        )}
                    </div>

                    <div className="data-block data-block-thirds">
                        <h3 className="details-text-heading">Payload</h3>
                        <p><span className="details-text-heading">Pressurized capsule:</span> {dragon.pressurized_capsule?.payload_volume.cubic_meters} m<sup>2</sup> | {dragon.pressurized_capsule?.payload_volume.cubic_feet} ft<sup>3</sup></p>
                        <p><span className="details-text-heading">Total launch payload mass:</span> {dragon.launch_payload_mass?.kg} kg | {dragon.launch_payload_mass?.lb} lb</p>
                        <p><span className="details-text-heading">Total return payload mass:</span> {dragon.return_payload_mass?.kg} kg | {dragon.return_payload_mass?.lb} lb</p>
                        <p><span className="details-text-heading">Total launch payload volume:</span> {dragon.launch_payload_vol?.cubic_meters} m<sup>2</sup> | {dragon.launch_payload_vol?.cubic_feet} ft<sup>3</sup></p>
                        <p><span className="details-text-heading">Total return payload volume:</span> {dragon.return_payload_vol?.cubic_meters} m<sup>2</sup> | {dragon.return_payload_vol?.cubic_feet} ft<sup>3</sup></p>
                        <br />
                        <p className="details-text-heading">Trunk</p>
                        <p><span className="details-text-heading">Trunk volume:</span> {dragon.trunk?.trunk_volume.cubic_meters} m<sup>2</sup> | {dragon.trunk?.trunk_volume.cubic_feet} ft<sup>3</sup></p>
                        <p><span className="details-text-heading">Trunk cargo solar array(s):</span> {dragon.trunk?.cargo.solar_array}</p>
                        <p><span className="details-text-heading">Trunk cargo (unpressurized):</span> {dragon.trunk?.cargo.unpressurized_cargo ? 'Yes' : 'No'}</p>
                    </div>

                    <div className="data-block data-block-thirds">
                        <h3 className="details-text-heading">Heat shield</h3>
                        <p><span className="details-text-heading">Material:</span> {dragon.heat_shield?.material}</p>
                        <p><span className="details-text-heading">Max temprature:</span> <TemperatureConverter direction="f2c" temp={dragon.heat_shield?.temp_degrees} />°c | {dragon.heat_shield?.temp_degrees}°F</p>
                        <p><span className="details-text-heading">Diameter:</span> {dragon.heat_shield?.size_meters} m</p>
                        <p><span className="details-text-heading">Developement partner:</span> {dragon.heat_shield?.dev_partner}</p>
                    </div>

                </div>
            </div>

            {props.waitingForImages ? <LoaderSpinner /> : <ThumbnailGrid images={dragon.flickr_images} />}
        </div>
    );
}

export default DragonDetailsContent;
