import React from 'react';

function ConvertTimeStamp(props) {
    const monthConvert = ['01','02','03','04','05','06','07','08','09','10','11','12']
    const unix_timestamp = props.unixTimestamp;
    const date = new Date(props.unixTimestamp * 1000);
    const year = date.getFullYear();
    const month = monthConvert[date.getMonth()];
    const day = "0" + date.getDay();
    const hours = "0" + date.getHours();
    const minutes = "0" + date.getMinutes();
    const formattedTime = year + '-' + month.slice(-2) + '-' + day.slice(-2) + ' ' + hours.slice(-2) + ':' + minutes.substr(-2);
    
    return (
        <span>{formattedTime}</span>
    );
}

export default ConvertTimeStamp;
