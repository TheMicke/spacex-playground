import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';
import PayloadsListCard from './PayloadsListCard';
import lsh from '../../modules/localStorageHandler';
import CacheInfo from '../_common/CacheInfo';

function PayloadsList() {
    const [isLoading, setIsLoading] = useState(false);
    const [payloads, setPayloads] = useState([]);

    async function fetchData() {
        setIsLoading(true)
        await fetch('/api/v3/payloads')
        .then(res => res.json())
        .then(data => setPayloads(data));
        setIsLoading(false);
    }
    
    useEffect(() => {
        if( payloads.length === 0) {
            if (!lsh.get('payloads')) {
                fetchData();
            } else {
                setPayloads(lsh.get('payloads'))
            }

        } else {
            if(!lsh.get('payloads')) {
                lsh.set('payloads', payloads, 21600000)
            }
        }
    }, [payloads]);

    return (
        <div>
            <CacheInfo dataKey='payloads' />
            {isLoading ? <LoaderSpinner /> : payloads.length>0 && payloads.map(payload => <PayloadsListCard key={Math.random()} data={payload} />)}
        </div>
    );
}

export default PayloadsList;
