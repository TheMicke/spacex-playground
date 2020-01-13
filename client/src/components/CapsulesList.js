import React, { useState, useEffect } from 'react';

function CapsulesList() {
    const [capsules, setCapsules] = useState({});

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await fetch('/capsules')
            .then(res => res.json())
        }
        fetchData();
    }, []);

    return (
        <div>
            <p className="capsules">asd</p>
            {console.log('capsules:', capsules)}
        </div>
    );
}

export default CapsulesList;
