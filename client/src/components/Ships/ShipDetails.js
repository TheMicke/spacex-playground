import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';
import ShipDetailsContent from './ShipDetailsContent';

function ShipDetails(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [waitingForImages, setWaitingForImages] = useState(true);
    const [ship, setShip] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const shipId = props.match.params.shipId;
            setIsLoading(true);
            await fetch(`/api/v3/ships/${shipId}`)
                .then(res => res.json())
                .then(data => setShip(data));
            setIsLoading(false);
            setWaitingForImages(false);
        }
        fetchData();
    }, [props.match.params.shipId]);

    return <div>{isLoading ? <LoaderSpinner /> : <ShipDetailsContent ship={ship} waitingForImages={waitingForImages} />}</div>;
}

export default ShipDetails;
