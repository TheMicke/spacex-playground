const express = require('express');
const fetch = require('node-fetch');

const app = express();

const baseApiUrl = 'https://api.spacexdata.com/v3/';

const getAllCapsules = async () => {
    let data;
    await fetch(baseApiUrl + 'capsules').then(res => (data = res.json()));
    return data;
};


// Test function to test getAllCapsules... To be deleted..
// function asd() {
//     const data = getAllCapsules();
//     console.log(data);
// } 
// asd();


module.exports = {
    app,
    getAllCapsules,
};
