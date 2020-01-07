module.exports = function(app) {
    app.get('/', (req, res) => {
        res.send('Hello World!?');
    });

    app.get('/goodbye', (req, res) => {
        res.send('Goodbye World!?');
    });

    app.get('/capsules', (req, res) => {
        const getData = async () => {
            
        }
        // console.log(app.getAllCapsules());
        res.send('should get all capsules');
    });
};
