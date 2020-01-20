import React from 'react';
import UnixTimeConverter from '../_common/UnixTimeConverter';
import ThumbnailGrid from '../_common/ThumbnailGrid';
import LinkIcon from '../_common/LinkIcon';

function RoadsterContent(props) {
    console.log(props);
    const roadster = props.data;
    return (
        <div>
            <h3>{roadster.name}</h3>
            <p>Launch date: <UnixTimeConverter timestamp={roadster.launch_date_unix} />
            </p>

            <p>Launch mass: {roadster.launch_mass_kg} kg | {roadster.launch_mass_lbs} lbs</p>
            <p>Speed: {Math.round(roadster.speed_kph)} km/h | {Math.round(roadster.speed_mph)} mph</p>
            <p>Distance to earth: {Math.round(roadster.earth_distance_km)} km | {Math.round(roadster.earth_distance_mi)} mi</p>
            <p>Distance to mars: {Math.round(roadster.mars_distance_km)} km | {Math.round(roadster.mars_distance_mi)} mi</p>
            <p>Norad id: {roadster.norad_id}</p>
            <p>{roadster.details}</p>
            <p>Links: <LinkIcon href={roadster.wikipedia} linkType="wikipedia" /></p>
            { props.waitingForImages ? '' : <ThumbnailGrid images={roadster.flickr_images} /> }


        </div>
    );
}

export default RoadsterContent;
