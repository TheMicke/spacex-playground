import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';

import PayloadsListCard from './PayloadsListCard';

function PayloadsList() {
    const [isLoading, setIsLoading] = useState(false);
    const [payloads, setPayloads] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            await fetch('/payloads')
            .then(res => res.json())
            .then(data => setPayloads(data));
            setIsLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? 
            <LoaderSpinner /> 
            : 
            payloads.length>0 && payloads.map(payload => <PayloadsListCard key={payload.id} data={payload} />)
            }
        </div>
    );
}

export default PayloadsList;
