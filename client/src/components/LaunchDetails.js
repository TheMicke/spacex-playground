import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MissionPatch = styled.img`
    width: 30%;
    margin: 25px;
`;

function LaunchDetails(props) {
    const [launch, setLaunch] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const flightNumber = props.match.params.flightNumber;
            await fetch(`/launches/${flightNumber}`)
                .then(res => res.json())
                .then(data => setLaunch(data))
                .catch(err => console.log(err));
        }
        fetchData();
    }, [props.match.params.flightNumber]);

    return (
        <div>
            <MissionPatch src={launch.links?.mission_patch} />
            <p>{launch.mission_name}</p>
            <p>{launch.launch_success ? 'Successful launch' : 'Failed launch: ' + launch.launch_failure_details?.reason}</p>
        </div>
    );
}

export default LaunchDetails;
