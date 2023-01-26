require('dotenv').config();
const express = require('express');
const path =  require('path');

const app  = express();

app.use('/', express.static(path.resolve(__dirname,'./build' )));
const port = process.env.PORT || 3000;

app.listen(port, ((err) =>{ err ?  console.log('err', err) : console.log(`App run on ${port} 🎨`) }));