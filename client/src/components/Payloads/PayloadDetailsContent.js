import React from 'react';
import '../_css/details-view.css';

function PayloadDetailsContent(props) {
    console.log('PayloadDetailsContent', props);
    const payload = props.payload;
    return (
        <div className="info-text">
            <h3>{payload.payload_id}</h3>
            <p>Customer: {payload.customers}</p>
            <p>Nationality: {payload.nationality}</p>
            <p>Manufacturer: {payload.manufacturer}</p>
            <p>Payload type: {payload.payload_type}</p>
            <p>Payload mass: {payload.payload_mass_kg ? payload.payload_mass_kg + ' kg | ' + payload.payload_mass_lbs + ' lbs' : '-'}</p>
            <p>Orbit: {payload.orbit} - {payload.orbit_params?.regime}</p>
            <p>Expected lifespan: { payload.orbit_params?.lifespan_years ? payload.orbit_params?.lifespan_years + ' years.' : '-' }</p>
        </div>
    )
}

export default PayloadDetailsContent;
