const { getAllCapsules, getUpcomingCapsules, getPastCapsules, getCapsule } = require('./dataFetchers/capsules');
const { getAllCores, getUpcomingCores, getPastCores, getCore } = require('./dataFetchers/cores');
const { getAllDragons, getDragon } = require('./dataFetchers/dragons');
const { getAllHistoricalEvents, getHistory } = require('./dataFetchers/history');
const { getInfo } = require('./dataFetchers/info');
const { getAllLandingPads, getLandingPad } = require('./dataFetchers/landingPads');
const { getAllLaunches, getPastLaunches, getUpcomingLaunches, getLaunch, getLatestLaunch, getNextLaunch } = require('./dataFetchers/launches');
const { getAllLaunchPads, getLaunchPad } = require('./dataFetchers/launchPads');
const { getAllMissions, getMission } = require('./dataFetchers/missions');
const { getAllPayloads, getPayload } = require('./dataFetchers/payloads');
const { getRoadster } = require('./dataFetchers/roadster');
const { getAllRockets, getRocket } = require('./dataFetchers/rockets');
const { getAllShips, getShip } = require('./dataFetchers/ships');

module.exports = function(app) {
    app.get('/api/v3/', (req, res) => {
        res.send('Hello World!');
    });

    
    //************//
    //  Capsules  //
    //************//
    app.get('/api/v3/capsules', (req, res) => {
        getAllCapsules().then(data => res.send(data));
    });

    app.get('/api/v3/capsules/upcoming', (req, res) => {
        getUpcomingCapsules().then(data => res.send(data));
    });

    app.get('/api/v3/capsules/past', (req, res) => {
        getPastCapsules().then(data => res.send(data));
    });

    app.get('/api/v3/capsules/:capsuleSerial', (req, res) => {
        getCapsule(req.params.capsuleSerial).then(data => res.send(data));
    });
    

    //*********//
    //  Cores  //
    //*********//
    app.get('/api/v3/cores', (req, res) => {
        getAllCores().then(data => res.send(data));
    });

    app.get('/api/v3/cores/upcoming', (req, res) => {
        getUpcomingCores().then(data => res.send(data));
    });

    app.get('/api/v3/cores/past', (req, res) => {
        getPastCores().then(data => res.send(data));
    });

    app.get('/api/v3/cores/:serial', (req, res) => {
        getCore(req.params.serial).then(data => res.send(data));
    });

    
    //***********//
    //  Dragons  //
    //***********//
    app.get('/api/v3/dragons', (req, res) => {
        getAllDragons().then(data => res.send(data));
    });

    app.get('/api/v3/dragons/:id', (req, res) => {
        getDragon(req.params.id).then(data => res.send(data));
    });

    
    // History
    app.get('/api/v3/history', (req, res) => {
        getAllHistoricalEvents().then(data => res.send(data));
    });

    app.get('/api/v3/history/:id', (req, res) => {
        getHistory(req.params.id).then(data => res.send(data));
    });
    
    //*********/
    //  Info  //
    //*********/
    app.get('/api/v3/info', (req, res) => {
        getInfo().then(data => res.send(data));
    });

    
    //****************//
    //  Landing pads  //
    //****************//
    app.get('/api/v3/landing_pads', (req, res) => {
        getAllLandingPads().then(data => res.send(data));
    });

    app.get('/api/v3/landing_pads/:id', (req, res) => {
        getLandingPad(req.params.id).then(data => res.send(data));
    });

    
    //************//
    //  Launches  //
    //************//
    app.get('/api/v3/launches', (req, res) => {
        getAllLaunches().then(data => res.send(data));
    });

    app.get('/api/v3/launches/past', (req, res) => {
        getPastLaunches().then(data => res.send(data));
    });

    app.get('/api/v3/launches/upcoming', (req, res) => {
        getUpcomingLaunches().then(data => res.send(data));
    });

    app.get('/api/v3/launches/latest', (req, res) => {
        getLatestLaunch().then(data => res.send(data));
    });

    app.get('/api/v3/launches/next', (req, res) => {
        getNextLaunch().then(data => res.send(data));
    });

    app.get('/api/v3/launches/:flight_number', (req, res) => {
        getLaunch(req.params.flight_number).then(data => res.send(data));
    });

    
    //****************/    
    //  Launch pads  //
    //****************/
    app.get('/api/v3/launch_pads', (req, res) => {
        getAllLaunchPads().then(data => res.send(data));
    });

    app.get('/api/v3/launch_pads/:site_id', (req, res) => {
        getLaunchPad(req.params.site_id).then(data => res.send(data));
    });

    
    //************//
    //  Missions  //
    //************//
    app.get('/api/v3/missions', (req, res) => {
        getAllMissions().then(data => res.send(data));
    });

    app.get('/api/v3/missions/:id', (req, res) => {
        getMission(req.params.id).then(data => res.send(data));
    });

    
    //************//
    //  Payloads  //
    //************//
    app.get('/api/v3/payloads', (req, res) => {
        getAllPayloads().then(data => res.send(data));
    });
    
    app.get('/api/v3/payloads/:id', (req, res) => {
        getPayload(req.params.id).then(data => res.send(data));
    });

    
    //************//
    //  Roadster  //
    //************//
    app.get('/api/v3/roadster', (req, res) => {
        getRoadster().then(data => res.send(data));
    });
    

    //***********//
    //  Rockets  //
    //***********//
    app.get('/api/v3/rockets', (req, res) => {
        getAllRockets().then(data => res.send(data));
    });

    app.get('/api/v3/rockets/:rocket_id', (req, res) => {
        getRocket(req.params.rocket_id).then(data => res.send(data));
    });

    
    //*********//
    //  Ships  //
    //*********//
    app.get('/api/v3/ships', (req, res) => {
        getAllShips().then(data => res.send(data));
    });

    app.get('/api/v3/ships/:id', (req, res) => {
        getShip(req.params.id).then(data => res.send(data));
    });
};
