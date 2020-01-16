import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../common/LoaderSpinner';
import CapsulesListCard from './CapsulesListCard';

function CapsulesList() {
    const [isLoading, setIsLoading] = useState(false);
    const [capsules, setCapsules] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            await fetch('/capsules')
            .then(res => res.json())
            .then(data => setCapsules(data));
            setIsLoading(false)

        }
        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? 
            <LoaderSpinner /> 
            : 
            capsules.length>0 && capsules.map(capsule => <CapsulesListCard key={capsule.capsule_serial} data={capsule} />)}
        </div>
    );
}

export default CapsulesList;
