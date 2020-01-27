import React, { useState, useEffect } from 'react';
import InfoContent from './InfoContent';
import APIinfo from './APIinfo';
import LoaderSpinner from '../_common/LoaderSpinner';

function Info() {
    const [isLoading, setIsLoading] = useState(false);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            await fetch('/api/v3/info')
                .then(res => res.json())
                .then(data => setInfo(data));
            setIsLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div>
            <div>{isLoading ? <LoaderSpinner /> : <InfoContent info={info} />}</div>
            <APIinfo />
        </div>
    );
}

export default Info;
