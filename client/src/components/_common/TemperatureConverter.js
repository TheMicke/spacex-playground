function TemperatureConverter(props) {

    if(props.direction === 'f2c') { 
        return (Math.round((props.temp - 32) * 5/9));
    }

    if( props.direction === 'c2f') {
        return (Math.round(props.temp *9/5 + 32));
    }

}

export default TemperatureConverter;