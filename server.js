const app = require('./app').app;
const port = 3001;
const initRoutes = require('./routes');

initRoutes(app);

app.listen(port, () => console.log(`Space X playground listening on port ${port}!`));
