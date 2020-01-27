import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';

import ShipsListCard from './ShipsListCard';

function ShipsList() {
    const [isLoading, setIsLoading] = useState(false);
    const [ships, setShips] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            await fetch('/api/v3/ships')
                .then(res => res.json())
                .then(data => setShips(data));
            setIsLoading(false);
        }
        fetchData();
    }, []);

    return <div>{isLoading ? <LoaderSpinner /> : ships.length > 0 && ships.map(ship => <ShipsListCard key={ship.ship_id} data={ship} />)}</div>;
}

export default ShipsList;
