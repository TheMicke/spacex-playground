import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LaunchesListCard from './LaunchesListCard';
import LoaderSpinner from '../_common/LoaderSpinner';
import DefaultButton from '../_common/DefaultButton';


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
            <TopRow>
                <DefaultButton href='/launches/upcoming' text='Upcoming launch' />
                <DefaultButton href='/launches/latest' text='Latest launch' />
            </TopRow>
            {isLoading ? 
            <LoaderSpinner /> 
            : 
            launches.length>0 && launches.map(launch => <LaunchesListCard key={launch.flight_number} data={launch} />)
            }
        </div>
    );
}

export default LaunchesList;
