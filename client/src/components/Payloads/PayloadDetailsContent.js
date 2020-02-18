import React, { useState } from 'react';
import '../_css/details-view.css';
import '../_css/component-general.css';
import DefaultBackButton from '../_common/DefaultBackButton';
import ImperialToggle from '../_common/ImperialToggle'

function PayloadDetailsContent(props) {
    const payload = props.payload;
    const [useMetric, setUseMetric] = useState(true);

    const toggleUseMetric = () => {
        setUseMetric(!useMetric);
    }

    return (
        <div className="page-content-container">
            <DefaultBackButton url="/payloads" />
            <ImperialToggle toggle={toggleUseMetric} usingMetric={useMetric} />
            <div className="data-block-container">
                <div className="data-block data-block-half">
                    <h2 className="details-heading">{payload.payload_id}</h2>
                    <p><span className="details-text-heading">Customer: </span>{payload.customers}</p>
                    <p><span className="details-text-heading">Nationality: </span>{payload.nationality}</p>
                    <p><span className="details-text-heading">Manufacturer: </span>{payload.manufacturer}</p>
                    <p><span className="details-text-heading">Payload type: </span>{payload.payload_type}</p>
                    <p><span className="details-text-heading">Payload mass: </span>{payload.payload_mass_kg ? useMetric ? payload.payload_mass_kg + ' kg' : payload.payload_mass_lbs + ' lbs' : '-'}</p>
                    <p><span className="details-text-heading">Orbit: </span>{payload.orbit} - {payload.orbit_params?.regime}</p>
                    <p><span className="details-text-heading">Expected lifespan: </span>{payload.orbit_params?.lifespan_years ? payload.orbit_params?.lifespan_years + ' years.' : '-' }</p>
                    <p><span className="details-text-heading">Norad id: </span>{payload.norad_id}</p>
                </div>
            </div>
        </div>
    )
}

export default PayloadDetailsContent;
