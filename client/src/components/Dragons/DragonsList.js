import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';
import DragonsListCard from './DragonsListCard';
import lsh from '../../modules/localStorageHandler';
import CacheInfo from '../_common/CacheInfo';

function DragonsList() {
    const [isLoading, setIsLoading] = useState(false);
    const [dragons, setDragons] = useState([]);

    async function fetchData() {
        setIsLoading(true)
        await fetch('/api/v3/dragons')
        .then(res => res.json())
        .then(data => setDragons(data));
        setIsLoading(false);
    }
    
    useEffect(() => {
        if( dragons.length === 0) {
            if (!lsh.get('dragons')) {
                fetchData();
            } else {
                setDragons(lsh.get('dragons'))
            }

        } else {
            if(!lsh.get('dragons')) {
                lsh.set('dragons', dragons, 21600000)
            }
        }
    }, [dragons]);

    return (
        <div>
            <CacheInfo dataKey='dragons' />
            {isLoading ? <LoaderSpinner /> : dragons.length>0 && dragons.map(dragon => <DragonsListCard key={dragon.id} data={dragon} />)}
        </div>
    );
}

export default DragonsList;
