const express = require('expreess');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.get('/times', (_req, res) => {
    res.send(times);
});

apiRouter.post('/time', (req, res) => {
    times = updateTimes(req.body, times)
    res.send(times);
});

app.use((_req, res) => {
    res.sendFile('index.html', {root: 'publix'});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

let times = [];
function updateTimes(newTimes, times) {
    let found = false;
    for
}