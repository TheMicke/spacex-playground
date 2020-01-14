const fetch = require('node-fetch');
const baseApiUrl ='https://api.spacexdata.com/v3/';

const getAllPayloads = async () => {
    let data;
    await fetch(baseApiUrl + 'payloads').then(res => (data = res.json()));
    return data;
};

const getPayload = async payloadId => {
    let data;
    await fetch(baseApiUrl + 'payloads/' + payloadId).then(res => (data = res.json()));
    return data;
};

module.exports = { getAllPayloads, getPayload };
