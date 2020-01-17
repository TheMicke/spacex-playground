import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';


import HistoryListCard from './HistoryListCard';

function HistoryList() {
    const [isLoading, setIsLoading] = useState(false);
    const [dragons, setDragons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            await fetch('/history')
            .then(res => res.json())
            .then(data => setDragons(data));
            setIsLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? 
            <LoaderSpinner /> 
            : 
            dragons.length>0 && dragons.map(dragon => <HistoryListCard key={dragon.id} data={dragon} />)
            }
        </div>
    );
}

export default HistoryList;
