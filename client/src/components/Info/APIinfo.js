import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';
import APIinfoContent from './APIinfoContent';


function APIinfo() {
    const [isLoadingApiInfo, setIsLoadingApiInfo] = useState(false);
    const [apiInfo, setApiInfo] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoadingApiInfo(true);
            await fetch('https://api.spacexdata.com/v3')
                .then(res => res.json())
                .then(apiInfo => setApiInfo(apiInfo));
                setIsLoadingApiInfo(false);
        }
        fetchData();
    }, []);
    
    return (
        <div>
            { isLoadingApiInfo ? <LoaderSpinner /> : <APIinfoContent data={apiInfo} /> }
        </div>
    );
}

export default APIinfo;
