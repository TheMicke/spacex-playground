import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';

import CoresListCard from './CoresListCard';

function CoresList() {
    const [isLoading, setIsLoading] = useState(false);
    const [cores, setCores] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            await fetch('/api/v3/cores')
                .then(res => res.json())
                .then(data => setCores(data));
            setIsLoading(false);
        }
        fetchData();
    }, []);

    return <div>{isLoading ? <LoaderSpinner /> : cores.length > 0 && cores.map(core => <CoresListCard key={core.core_serial} data={core} />)}</div>;
}

export default CoresList;
