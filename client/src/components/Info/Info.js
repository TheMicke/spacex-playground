import React, { useState, useEffect } from 'react';
import InfoContent from './InfoContent'
import LoaderSpinner from '../_common/LoaderSpinner';

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
