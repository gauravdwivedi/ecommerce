const express = require('express');
const app = express();

const port = 8000;
const db = require('./config/mongoose');

app.use(express.urlencoded());
 app.use(express.json());

app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) { console.log(err); return; }
    
    console.log(`Server is running in port ${port}`);
});