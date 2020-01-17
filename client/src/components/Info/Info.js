import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import InfoContent from './InfoContent'

import LoaderSpinner from '../_common/LoaderSpinner';
import DefaultButton from '../_common/DefaultButton';


const TopRow = styled.div`
    margin-top: 15px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

function Info() {
    const [isLoading, setIsLoading] = useState(false);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            await fetch('/info')
            .then(res => res.json())
            .then(data => setInfo(data));
            setIsLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? 
            <LoaderSpinner /> 
            : 
            <InfoContent data={info} />}
        </div>
    );
}

export default Info;
