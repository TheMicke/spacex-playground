const fetch = require('fetch');
const baseApiUrl = require('../app');

const getAllLaunches = async () => {
    let data;
    await fetch(baseApiUrl + 'launches').then(res => (data = res.json()));
    return data;
};

const getPastLaunches = async () => {
    let data;
    await fetch(baseApiUrl + 'launches/past').then(res => (data = res.json()));
    return data;
};

const getUpcomingLaunches = async () => {
    let data;
    await fetch(baseApiUrl + 'launches/upcoming').then(res => (data = res.json()));
    return data;
};

const getLaunch = async flightNumber => {
    let data;
    await fetch(baseApiUrl + 'launches/' + flightNumber).then(res => (data = res.json()));
    return data;
};

const getLatestLaunch = async () => {
    let data;
    await fetch(baseApiUrl + 'launches/latest').then(res => (data = res.json()));
    return data;
};

const getNextLaunch = async () => {
    let data;
    await fetch(baseApiUrl + 'launches/next').then(res => (data = res.json()));
    return data;
};

module.exports = { getAllLaunches, getPastLaunches, getUpcomingLaunches, getLaunch, getLatestLaunch, getNextLaunch };
