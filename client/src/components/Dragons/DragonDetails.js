import React, { useState, useEffect } from 'react';
import DragonDetailsContent from './DragonDetailsContent';
import LoaderSpinner from '../_common/LoaderSpinner';

function DragonDetails(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [waitingForImages, setWaitingForImages] = useState(true);
    const [dragon, setDragon] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const dragonId = props.match.params.dragonId;
            await fetch(`/api/v3/dragons/${dragonId}`)
                .then(res => res.json())
                .then(data => setDragon(data))
                .catch(err => console.log(err));
            setIsLoading(false);
            setWaitingForImages(false);
        }
        fetchData();
    }, [props.match.params.dragonId]);


    return (
        <div>
            {isLoading ? <LoaderSpinner /> : <DragonDetailsContent dragon={dragon} waitingForImages={waitingForImages} /> }
        </div>
    );
}

export default DragonDetails;
