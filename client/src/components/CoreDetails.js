import React, { useState, useEffect } from 'react';
import LoaderSpinner from './LoaderSpinner';

function CoreDetails(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [core, setCore] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const coreSerial = props.match.params.coreSerial;
            setIsLoading(true);
            await fetch(`/cores/${coreSerial}`)
                .then(res => res.json())
                .then(data => setCore(data));
            setIsLoading(false);
        }
        fetchData();
    }, [props.match.params.coreSerial]);

    return <div>
        {isLoading ? <LoaderSpinner /> : '' }
            <p>Core Serial: {core.core_serial}</p>
            <p>Status: {core.status}</p>
            <p>Details: {core.details}</p>
        </div>;
}

export default CoreDetails;
