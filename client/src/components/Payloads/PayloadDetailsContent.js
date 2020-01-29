import React from 'react';
import '../_css/details-view.css';

function PayloadDetailsContent(props) {
    console.log('PayloadDetailsContent', props);
    const payload = props.payload;
    return (
        <div className="content-container">
            <div className="data-block">
                <h3><span className="text-heading">{payload.payload_id}</span></h3>
                <p><span className="text-heading">Customer: </span>{payload.customers}</p>
                <p><span className="text-heading">Nationality: </span>{payload.nationality}</p>
                <p><span className="text-heading">Manufacturer: </span>{payload.manufacturer}</p>
                <p><span className="text-heading">Payload type: </span>{payload.payload_type}</p>
                <p><span className="text-heading">Payload mass: </span>{payload.payload_mass_kg ? payload.payload_mass_kg + ' kg | ' + payload.payload_mass_lbs + ' lbs' : '-'}</p>
                <p><span className="text-heading">Orbit: </span>{payload.orbit} - {payload.orbit_params?.regime}</p>
                <p><span className="text-heading">Expected lifespan: </span>{payload.orbit_params?.lifespan_years ? payload.orbit_params?.lifespan_years + ' years.' : '-' }</p>
                <p><span className="text-heading">Norad id: </span>{payload.norad_id}</p>
            </div>
        </div>
    )
}

export default PayloadDetailsContent;
