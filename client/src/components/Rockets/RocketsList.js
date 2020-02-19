import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';
import RocketsListCard from './RocketsListCard';
import lsh from '../../modules/localStorageHandler';
import CacheInfo from '../_common/CacheInfo';

function RocketsList() {
    const [isLoading, setIsLoading] = useState(false);
    const [rockets, setRockets] = useState([]);

    async function fetchData() {
        setIsLoading(true)
        await fetch('/api/v3/rockets')
        .then(res => res.json())
        .then(data => setRockets(data));
        setIsLoading(false);
    }
    
    useEffect(() => {
        if( rockets.length === 0) {
            if (!lsh.get('rockets')) {
                fetchData();
            } else {
                setRockets(lsh.get('rockets'))
            }

        } else {
            if(!lsh.get('rockets')) {
                lsh.set('rockets', rockets, 21600000)
            }
        }
    }, [rockets]);

    return (
        <div>
            <CacheInfo dataKey='rockets' />
            {isLoading ? <LoaderSpinner /> : rockets.length>0 && rockets.map(rocket => <RocketsListCard key={rocket.id} data={rocket} />)}
        </div>
    );
}

export default RocketsList;
