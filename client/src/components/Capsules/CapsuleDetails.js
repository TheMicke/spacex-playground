import React, { useState, useEffect } from 'react';
import '../_css/details-view.css';
import LoaderSpinner from '../_common/LoaderSpinner';
import CapsuleDetailsContent from './CapsulesDetailsContent';

function CapsuleDetails(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [capsule, setCapsule] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const capsuleSerial = props.match.params.capsuleSerial;
            setIsLoading(true);
            await fetch(`/api/v3/capsules/${capsuleSerial}`)
                .then(res => res.json())
                .then(data => setCapsule(data));
            setIsLoading(false);
        }
        fetchData();
    }, [props.match.params.capsuleSerial]);

    return <div>{isLoading ? <LoaderSpinner /> : <CapsuleDetailsContent data={capsule} />}</div>;
}

export default CapsuleDetails;
