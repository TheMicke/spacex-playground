import React, { useState, useEffect } from 'react';
import './css/CapsulesListCard.css';

function CapsulesListCard(props) {
    return (
        <div className="capsules-list-card-container">
            <h3 className="capsule-title">{props.data.capsule_serial}</h3>
            <p className="capsule-data"><span className="capsule-data-heading">First Launch: </span>{convertTimeStamp(props.data.original_launch_unix)}</p>
            <p className="capsule-data"><span className="capsule-data-heading">Status: </span>{props.data.status}</p>
            <p className="capsule-data"><span className="capsule-data-heading">Missions: </span>{props.data.missions.length}</p>
        </div>
    );
}

function convertTimeStamp(timestamp) {
    const unix_timestamp = timestamp;
    const date = new Date(unix_timestamp * 1000)
    const year = date.getFullYear();
    const month = "0" + date.getMonth();
    const day = "0" + date.getDay();
    const hours = "0" + date.getHours();
    const minutes = "0" + date.getMinutes();
    const formattedTime = year + '-' + month.slice(-2) + '-' + day.slice(-2) + ' ' + hours.slice(-2) + ':' + minutes.substr(-2);
    return formattedTime;
}


export default CapsulesListCard;
