import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../common/LoaderSpinner';

import DragonsListCard from './DragonsListCard';

function DragonsList() {
    const [isLoading, setIsLoading] = useState(false);
    const [dragons, setDragons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            await fetch('/dragons')
            .then(res => res.json())
            .then(data => setDragons(data));
            setIsLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? 
            <LoaderSpinner /> 
            : 
            dragons.length>0 && dragons.map(dragon => <DragonsListCard key={dragon.id} data={dragon} />)
            }
        </div>
    );
}

export default DragonsList;
