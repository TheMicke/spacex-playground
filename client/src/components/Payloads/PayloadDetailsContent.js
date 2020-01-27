import React from 'react';
import '../_css/details-view.css';

function PayloadDetailsContent(props) {
    console.log('PayloadDetailsContent', props);
    const payload = props.payload;
    return (
        <div className="info-block">
            <h3><span className="info-text-heading">{payload.payload_id}</span></h3>
            <p><span className="info-text-heading">Customer: </span>{payload.customers}</p>
            <p><span className="info-text-heading">Nationality: </span>{payload.nationality}</p>
            <p><span className="info-text-heading">Manufacturer: </span>{payload.manufacturer}</p>
            <p><span className="info-text-heading">Payload type: </span>{payload.payload_type}</p>
            <p><span className="info-text-heading">Payload mass: </span>{payload.payload_mass_kg ? payload.payload_mass_kg + ' kg | ' + payload.payload_mass_lbs + ' lbs' : '-'}</p>
            <p><span className="info-text-heading">Orbit: </span>{payload.orbit} - {payload.orbit_params?.regime}</p>
            <p><span className="info-text-heading">Expected lifespan: </span>{payload.orbit_params?.lifespan_years ? payload.orbit_params?.lifespan_years + ' years.' : '-' }</p>
            <p><span className="info-text-heading">Norad id: </span>{payload.norad_id}</p>
        </div>
    )
}

export default PayloadDetailsContent;
