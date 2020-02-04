import React from 'react';
import '../_css/details-view.css';
import '../_css/component-general.css';
import DefaultBackButton from '../_common/DefaultBackButton';

function PayloadDetailsContent(props) {
    const payload = props.payload;
    return (
        <div className="page-content-container">
            <DefaultBackButton />
            <div className="data-block">
                <h2 className="details-heading">{payload.payload_id}</h2>
                <p><span className="details-text-heading">Customer: </span>{payload.customers}</p>
                <p><span className="details-text-heading">Nationality: </span>{payload.nationality}</p>
                <p><span className="details-text-heading">Manufacturer: </span>{payload.manufacturer}</p>
                <p><span className="details-text-heading">Payload type: </span>{payload.payload_type}</p>
                <p><span className="details-text-heading">Payload mass: </span>{payload.payload_mass_kg ? payload.payload_mass_kg + ' kg | ' + payload.payload_mass_lbs + ' lbs' : '-'}</p>
                <p><span className="details-text-heading">Orbit: </span>{payload.orbit} - {payload.orbit_params?.regime}</p>
                <p><span className="details-text-heading">Expected lifespan: </span>{payload.orbit_params?.lifespan_years ? payload.orbit_params?.lifespan_years + ' years.' : '-' }</p>
                <p><span className="details-text-heading">Norad id: </span>{payload.norad_id}</p>
            </div>
        </div>
    )
}

export default PayloadDetailsContent;
