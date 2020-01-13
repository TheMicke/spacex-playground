import React, { useState, useEffect } from 'react';
import CapsulesListCard from './CapsulesListCard';

function CapsulesList() {
    const [capsules, setCapsules] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await fetch('/capsules')
            .then(res => res.json())
            .then(data => setCapsules(data));
        }
        fetchData();
    }, []);

    return (
        <div>
            {capsules.length>0 && capsules.map(capsule => <CapsulesListCard key={capsule.capsule_serial} data={capsule} />)}
            {console.log('capsules:', capsules)}
        </div>
    );
}

export default CapsulesList;
