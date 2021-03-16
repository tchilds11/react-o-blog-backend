'use strict';
const HTTP = require('http');

const HOSTNAME = '127.0.0.1',
    PORT = 3001;

const cors = require('cors');

const express = require('express'),
    app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static('public'));

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});

const rootController = require('./routes/index'),
    blogsController = require('./routes/blogs');

app.use('/', rootController);
app.use('/blogs', blogsController);