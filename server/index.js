const express = require('express');
const parser = require('body-parser');
const path = require('path');
const Router = require('./Router.js')

const app = express();
const port = 3004;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use('/api', Router)

app.use(express.static(path.join(__dirname, '../client/dist')))
app.listen(port, console.log(`listening on port ${port}`));