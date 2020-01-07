const fetch = require('fetch');
const baseApiUrl = require('../app');

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
