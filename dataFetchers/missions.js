const fetch = require('node-fetch');
const baseApiUrl ='https://api.spacexdata.com/v3/';

const getAllMissions = async () => {
    let data;
    await fetch(baseApiUrl + 'missions').then(res => (data = res.json()));
    return data;
};

const getMission = async missionId => {
    let data;
    await fetch(baseApiUrl + 'missions/' + missionId).then(res => (data = res.json()));
    return data;
};

module.exports = { getAllMissions, getMission };
