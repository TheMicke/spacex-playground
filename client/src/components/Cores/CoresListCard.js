import React from 'react';
import styled from 'styled-components';

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

function CoresListCard(props) {
    return (
        <a href={'/cores/' + props.data.core_serial} >
            <CardContainer>
    <p>Serial: {props.data.core_serial}</p>
    <p>Missions: {props.data.missions.length}</p>
    <p>Status: {props.data.status}</p>
    <p>First launch: {convertTimestamp(props.data.original_launch_unix)}</p>
            </CardContainer>
        </a>
    );
}

function convertTimestamp(timestamp) {
    const unix_timestamp = timestamp;
    const date = new Date(unix_timestamp * 1000);
    const year = date.getFullYear();
    const month = '0' + (date.getMonth() +1);
    const day = '0' + date.getDay();
    const hours = '0' + date.getHours();
    const minutes = '0' + date.getMinutes();
    const formattedTime = year + '-' + month.substr(-2) + '-' + day.substr(-2) + ' @ ' + hours.slice(-2) + ':' + minutes.substr(-2);
    return formattedTime;
}

export default CoresListCard;
