import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';
import CoresListCard from './CoresListCard';
import lsh from '../../modules/localStorageHandler';
import CacheInfo from '../_common/CacheInfo';

function CoresList() {
    const [isLoading, setIsLoading] = useState(false);
    const [cores, setCores] = useState([]);

    async function fetchData() {
        setIsLoading(true);
        await fetch('/api/v3/cores')
            .then(res => res.json())
            .then(data => setCores(data));
        setIsLoading(false);
    }
    
    useEffect(() => {
        if( cores.length === 0) {
            if (!lsh.get('cores')) {
                fetchData();
            } else {
                setCores(lsh.get('cores'))
            }

        } else {
            if(!lsh.get('cores')) {
                lsh.set('cores', cores, 21600000)
            }
        }
    }, [cores]);

    return (
        <div>
            <CacheInfo dataKey='cores' />
            {isLoading ? <LoaderSpinner /> : cores.length > 0 && cores.map(core => <CoresListCard key={core.core_serial} data={core} />)}
        </div>
    );
}

export default CoresList;
