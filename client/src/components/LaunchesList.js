import React, { useState, useEffect } from 'react';
import LaunchesListCard from './LaunchesListCard';
import LoaderSpinner from './LoaderSpinner';

function LaunchesList() {
    const [isLoading, setIsLoading] = useState(false);
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            await fetch('/launches')
            .then(res => res.json())
            .then(data => setLaunches(data));
            setIsLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? 
            <LoaderSpinner /> 
            : 
            launches.length>0 && launches.map(launch => <LaunchesListCard key={launch.flight_number} data={launch} />)
            }
        </div>
    );
}

export default LaunchesList;
