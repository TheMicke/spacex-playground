const express = require('express');
const fetch = require('node-fetch');

const app = express();

const baseApiUrl = 'https://api.spacexdata.com/v3/';

const getAllCapsules = async () => {
    const data = fetch(baseApiUrl + 'capsules').then(res => res.json());
    return data;
};

module.exports = {
    app,
    getAllCapsules,
};
