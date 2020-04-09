const express = require('express');
const app = express();
//port number
const port = 8000;
//database configuration
const db = require('./config/mongoose');

app.use(express.urlencoded());
 app.use(express.json());
//redirecting routes
app.use('/', require('./routes'));


app.listen(port, function (err) {
    if (err) { console.log(err); return; }
    
    console.log(`Server is running in port ${port}`);
});