function UnixTimeConverter(prop) {
    const timestamp = prop.timestamp;
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

export default UnixTimeConverter;