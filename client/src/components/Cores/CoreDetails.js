import React, { useState, useEffect } from 'react';
import CoreDetailsContent from './CoreDetailsContent';
import LoaderSpinner from '../_common/LoaderSpinner';


function CoreDetails(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [core, setCore] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const coreSerial = props.match.params.coreSerial;
            setIsLoading(true);
            await fetch(`/api/v3/cores/${coreSerial}`)
                .then(res => res.json())
                .then(data => setCore(data));
            setIsLoading(false);
        }
        fetchData();
    }, [props.match.params.coreSerial]);

    return (
        isLoading ? <LoaderSpinner /> : <CoreDetailsContent core={core}/>
    );

}

export default CoreDetails;
