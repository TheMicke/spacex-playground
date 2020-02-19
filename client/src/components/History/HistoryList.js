import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';
import HistoryListCard from './HistoryListCard';
import lsh from '../../modules/localStorageHandler';
import CacheInfo from '../_common/CacheInfo';

function HistoryList() {
    const [isLoading, setIsLoading] = useState(false);
    const [histories, setHistories] = useState([]);

    async function fetchData() {
        setIsLoading(true)
        await fetch('/api/v3/history')
        .then(res => res.json())
        .then(data => setHistories(data));
        setIsLoading(false);
    }
    
    useEffect(() => {
        if( histories.length === 0) {
            if (!lsh.get('histories')) {
                fetchData();
            } else {
                setHistories(lsh.get('histories'))
            }

        } else {
            if(!lsh.get('histories')) {
                lsh.set('histories', histories, 21600000)
            }
        }
    }, [histories]);

    return (
        <div>
            <CacheInfo dataKey='histories' />
            {isLoading ? <LoaderSpinner /> : histories.length>0 && histories.map(history => <HistoryListCard key={history.id} data={history} />)}
        </div>
    );
}

export default HistoryList;
