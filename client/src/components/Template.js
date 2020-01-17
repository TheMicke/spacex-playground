import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';

function ComponentName() {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            await fetch('/endpoint')
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
            // Do something with fetched data
            }
        </div>
    );
}

export default ComponentName;
