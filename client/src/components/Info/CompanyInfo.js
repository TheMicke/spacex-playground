import React, { useState, useEffect } from 'react';
import CompanyInfoContent from './CompanyInfoContent';
import APIinfo from './APIinfo';
import LoaderSpinner from '../_common/LoaderSpinner';

function CompanyInfo() {
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
        <>
            {isLoading ? <LoaderSpinner /> : <CompanyInfoContent info={info} />}
        </>
    );
}

export default CompanyInfo;
