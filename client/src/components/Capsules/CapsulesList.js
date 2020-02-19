import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';
import CapsulesListCard from './CapsulesListCard';
import lsh from '../../modules/localStorageHandler';
import CacheInfo from '../_common/CacheInfo';

function CapsulesList() {
    const [isLoading, setIsLoading] = useState(false);
    const [capsules, setCapsules] = useState([]);

    async function fetchData() {
        setIsLoading(true);
        await fetch('/api/v3/capsules')
        .then(res => res.json())
        .then(data => setCapsules(data));
        setIsLoading(false);
    }
    
    useEffect(() => {
        if( capsules.length === 0) {
            if (!lsh.get('capsules')) {
                fetchData();
            } else {
                setCapsules(lsh.get('capsules'))
            }

        } else {
            if(!lsh.get('capsules')) {
                lsh.set('capsules', capsules, 21600000)
            }
        }
    }, [capsules]);

    return (
        <div>
            <CacheInfo dataKey='capsules' />
            {isLoading ? <LoaderSpinner /> : capsules.length > 0 && capsules.map(capsule => <CapsulesListCard key={capsule.capsule_serial} data={capsule} />)}
        </div>
    );
}

export default CapsulesList;
