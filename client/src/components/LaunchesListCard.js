import React from 'react';
import styled from 'styled-components';

import defaultPatch from '../images/spacex-x.png';

const CardContainer = styled.div`
    background: rgb(0, 82, 135);
    background: linear-gradient(45deg, rgba(0, 82, 135, 1) 0%, rgba(0, 117, 193, 1) 100%);
    display: inline-block;
    border-radius: 15px;
    padding: 15px 5px;
    margin: 10px;
    width: 40%;
    color: #fff;
    transition: background 0.2s ease-in, color 0.2s ease-in;

    &:hover {
        background: rgb(136, 168, 197);
        background: linear-gradient(335deg, rgba(136, 168, 197, 1) 0%, rgba(174, 214, 251, 1) 100%);
        color: #333;
        transition: background 0.2s ease-in, color 0.2s ease-in;
    }
`;

const CardHeader = styled.h3`
    font-weight: 700;
`;

const CardDataHeading = styled.span`
    font-weight: 700;
`;

const MissionPatch = styled.img`
    max-height: 50px;
`;

function LaunchesListCard(props) {
    return (
        <a href={'/launches/' + props.data.flight_number} >
            <CardContainer>
                {props.data.links.mission_patch_small ? <MissionPatch src={props.data.links.mission_patch_small} /> : <MissionPatch src={defaultPatch} />}
                <CardHeader>{props.data.mission_name}</CardHeader>
                <p className="capsule-data">
                    <CardDataHeading>Launch date: </CardDataHeading>
                    {convertTimeStamp(props.data.launch_date_unix)}
                </p>
                <p className="capsule-data">
                    <CardDataHeading>Launch success: </CardDataHeading>
                    {props.data.launch_success ? 'Yes' : 'No'}
                </p>
            </CardContainer>
        </a>
    );
}

function convertTimeStamp(timestamp) {
    const monthConvert = ['01','02','03','04','05','06','07','08','09','10','11','12']
    const unix_timestamp = timestamp;
    const date = new Date(unix_timestamp * 1000);
    const year = date.getFullYear();
    const month = monthConvert[date.getMonth()];
    const day = '0' + date.getDay();
    const hours = '0' + date.getHours();
    const minutes = '0' + date.getMinutes();
    const formattedTime = year + '-' + month.slice(-2) + '-' + day.slice(-2) + ' @ ' + hours.slice(-2) + ':' + minutes.substr(-2);
    return formattedTime;
}

export default LaunchesListCard;
