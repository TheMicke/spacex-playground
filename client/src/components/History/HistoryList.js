import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';


import HistoryListCard from './HistoryListCard';

function HistoryList() {
    const [isLoading, setIsLoading] = useState(false);
    const [histories, setHistories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            await fetch('/api/v3/history')
            .then(res => res.json())
            .then(data => setHistories(data));
            setIsLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? 
            <LoaderSpinner /> 
            : 
            histories.length>0 && histories.map(history => <HistoryListCard key={history.id} data={history} />)
            }
        </div>
    );
}

export default HistoryList;
