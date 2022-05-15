const express = require('express');
const path = require('path');
const os = require('os');

const app = express();

app.use(express.static('dist'));
app.get('/Hackathon-/', express.static('../client/index.js'))
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname+'../client/index.js'));
 });

const port = 3003;
app.listen(port, () => console.log('Listening on port 3003!'));
