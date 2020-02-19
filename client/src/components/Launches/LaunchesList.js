import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LaunchesListCard from './LaunchesListCard';
import LoaderSpinner from '../_common/LoaderSpinner';
import DefaultButton from '../_common/DefaultButton';
import lsh from '../../modules/localStorageHandler';
import CacheInfo from '../_common/CacheInfo';

const TopRow = styled.div`
    margin-top: 15px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

function LaunchesList() {
    const [isLoading, setIsLoading] = useState(false);
    const [launches, setLaunches] = useState([]);

    async function fetchData() {
        setIsLoading(true)
        await fetch('/api/v3/launches')
        .then(res => res.json())
        .then(data => setLaunches(data))
        setIsLoading(false);
    };
    
    useEffect(() => {
        if( launches.length === 0) {
            if (!lsh.get('launches')) {
                fetchData();
            } else {
                setLaunches(lsh.get('launches'))
            }

        } else {
            if(!lsh.get('launches')) {
                lsh.set('launches', launches, 21600000)
            }
        }
    }, [launches]);

    return (
        <div>
            <TopRow>
                <DefaultButton href='/launches/latest' text='Latest launch' />
                <DefaultButton href='/launches/next' text='Next launch' />
            </TopRow>
            <CacheInfo dataKey='launches' />
            {isLoading ? <LoaderSpinner /> : launches.length>0 && launches.map(launch => <LaunchesListCard key={launch.flight_number} data={launch} />)}
        </div>
    );
}

export default LaunchesList;
