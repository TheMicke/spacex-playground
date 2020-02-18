import React from 'react';
import DefaultButtonOnClick from './DefaultButtonOnClick';

function ImperialToggle(props) {

    return (
        <div>
            <DefaultButtonOnClick onClick={props.toggle} text={props.usingMetric ? 'Show imperial' : 'Show metric'} />
        </div>
    )
}

export default ImperialToggle;