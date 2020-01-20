import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';

import RocketsListCard from './RocketsListCard';

function RocketsList() {
    const [isLoading, setIsLoading] = useState(false);
    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            await fetch('/rockets')
            .then(res => res.json())
            .then(data => setRockets(data));
            setIsLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? 
            <LoaderSpinner /> 
            : 
            rockets.length>0 && rockets.map(rocket => <RocketsListCard key={rocket.id} data={rocket} />)
            }
        </div>
    );
}

export default RocketsList;
