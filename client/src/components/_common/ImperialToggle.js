import React from 'react';

function ImperialToggle(props) {

    return (
        <div>
            <button onClick={props.toggle}>{props.usingMetric ? 'Show imperial' : 'Show metric'}</button>
        </div>
    )
}

export default ImperialToggle;