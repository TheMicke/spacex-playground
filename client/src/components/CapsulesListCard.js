import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    background-color: rgba(0, 82, 135, 1);
    display: inline-block;
    border-radius: 15px;
    padding: 5px;
    padding-left: 25px;
    margin: 10px;
    width: 40%;
    color: #fff;
    text-align: left;
    transition: background-color 0.2s ease-in, color 0.2s ease-in;

    &:hover {
        background-color: rgba(0, 82, 135, .5);
        color: #333;
        transition: background-color 0.2s ease-in, color 0.2s ease-in;
    }
`;

const CardHeader = styled.h3`
    font-weight: 700;
`;

const CardDataHeading = styled.span`
    font-weight: 700;
`;

function CapsulesListCard(props) {
    return (
        <CardContainer>
            <CardHeader>{props.data.capsule_serial}</CardHeader>
            
            <p className="capsule-data"><CardDataHeading>First Launch: </CardDataHeading>{ props.data.original_launch_unix ? convertTimeStamp(props.data.original_launch_unix) : '-' }</p>
            <p className="capsule-data"><CardDataHeading>Status: </CardDataHeading>{props.data.status}</p>
            <p className="capsule-data"><CardDataHeading>Missions: </CardDataHeading>{props.data.missions.length}</p>
            <p className="capsule-data"><CardDataHeading>Type: </CardDataHeading>{props.data.type}</p>
            <p className="capsule-data"><CardDataHeading>Reuses: </CardDataHeading>{props.data.reuse_count}</p>
            <p className="capsule-data"><CardDataHeading>Details: </CardDataHeading>{props.data.details}</p>
        </CardContainer>
    );
}

function convertTimeStamp(timestamp) {
    const monthConvert = ['01','02','03','04','05','06','07','08','09','10','11','12']
    const unix_timestamp = timestamp;
    const date = new Date(unix_timestamp * 1000);
    const year = date.getFullYear();
    const month = monthConvert[date.getMonth()];
    const day = "0" + date.getDay();
    const hours = "0" + date.getHours();
    const minutes = "0" + date.getMinutes();
    const formattedTime = year + '-' + month.slice(-2) + '-' + day.slice(-2) + ' ' + hours.slice(-2) + ':' + minutes.substr(-2);
    return formattedTime;
}


export default CapsulesListCard;
