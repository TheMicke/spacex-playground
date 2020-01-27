import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';
import PayloadDetailsContent from './PayloadDetailsContent';



function PayloadDetails(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const payloadId = props.match.params.payloadId;
            setIsLoading(true);
            await fetch(`/api/v3/payloads/${payloadId}`)
                .then(res => res.json())
                .then(data => setPayload(data));
            setIsLoading(false);
        }
        fetchData();
    }, [props.match.params.payloadId]);

    return <div>
        {isLoading ? <LoaderSpinner /> : <PayloadDetailsContent payload={payload} /> }
        </div>;
}

export default PayloadDetails;
