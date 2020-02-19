import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';
import ShipsListCard from './ShipsListCard';
import lsh from '../../modules/localStorageHandler';
import CacheInfo from '../_common/CacheInfo';

function ShipsList() {
    const [isLoading, setIsLoading] = useState(false);
    const [ships, setShips] = useState([]);

    async function fetchData() {
        setIsLoading(true);
        await fetch('/api/v3/ships')
            .then(res => res.json())
            .then(data => setShips(data));
        setIsLoading(false);
    }
    
    useEffect(() => {
        if( ships.length === 0) {
            if (!lsh.get('ships')) {
                fetchData();
            } else {
                setShips(lsh.get('ships'))
            }

        } else {
            if(!lsh.get('ships')) {
                lsh.set('ships', ships, 21600000)
            }
        }
    }, [ships]);

    return (
    <div>
        <CacheInfo dataKey='ships' />
        {isLoading ? <LoaderSpinner /> : ships.length > 0 && ships.map(ship => <ShipsListCard key={ship.ship_id} data={ship} />)}
    </div>
    );
}

export default ShipsList;
