import React from 'react';
import UnixTimeConverter from '../_common/UnixTimeConverter';
import ThumbnailGrid from '../_common/ThumbnailGrid';
import LinkIcon from '../_common/LinkIcon';
import '../_css/details-view.css';

function RoadsterContent(props) {
    console.log('RoadsterContent', props);
    const roadster = props.data;
    return (
        <div className="content-container">
            <div className="data-block">
                <h3>{roadster.name}</h3>
                <p><span className="text-heading">Launch date: </span><UnixTimeConverter timestamp={roadster.launch_date_unix} />
                </p>

                <p><span className="text-heading">Launch mass: </span>{roadster.launch_mass_kg} kg | {roadster.launch_mass_lbs} lbs</p>
                <p><span className="text-heading">Speed: </span>{Math.round(roadster.speed_kph)} km/h | {Math.round(roadster.speed_mph)} mph</p>
                <p><span className="text-heading">Distance to earth: </span>{Math.round(roadster.earth_distance_km)} km | {Math.round(roadster.earth_distance_mi)} mi</p>
                <p><span className="text-heading">Distance to mars: </span>{Math.round(roadster.mars_distance_km)} km | {Math.round(roadster.mars_distance_mi)} mi</p>
                <p><span className="text-heading">Norad id: </span>{roadster.norad_id}</p>
                <p>{roadster.details}</p>
                <p><span className="text-heading">Links: </span><LinkIcon href={roadster.wikipedia} linkType="wikipedia" /></p>
            </div>
            
            { props.waitingForImages ? '' : <ThumbnailGrid images={roadster.flickr_images} /> }


        </div>
    );
}

export default RoadsterContent;
