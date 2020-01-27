import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../_common/LoaderSpinner';

import HistoryDetailsContent from './HistoryDetailsContent';

function HistoryDetails(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const historyId = props.match.params.historyId;
            setIsLoading(true);
            await fetch(`/api/v3/history/${historyId}`)
                .then(res => res.json())
                .then(data => setHistory(data));
            setIsLoading(false);
        }
        fetchData();
    }, [props.match.params.historyId]);

    return <div>
        {isLoading ? <LoaderSpinner /> : <HistoryDetailsContent history={history} /> }
        </div>;
}

export default HistoryDetails;
