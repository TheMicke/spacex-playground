const express = require('express');
const fetch = require('node-fetch');

const app = express();

const baseApiUrl = 'https://api.spacexdata.com/v3/';

const getAllCapsules = async () => {
    let data;
    await fetch(baseApiUrl + 'capsules').then(res => (data = res.json()));
    return data;
};


async function asd() {
    const data = await getAllCapsules();
    console.log(data);
}
asd();


module.exports = {
    app,
    getAllCapsules,
};
