const { getAllCapsules } = require('./app');

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.get('/goodbye', (req, res) => {
        res.send('Goodbye World!');
    });

    app.get('/capsules', (req, res) => {
        getAllCapsules().then(data => res.send( data ));
        // res.send('Should be getting all capsules');
    });
};
