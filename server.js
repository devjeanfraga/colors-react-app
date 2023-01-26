require('dotenv').config();
import express from 'express';

import path from 'path';

const app  = express();

app.use('/', express.static(path.resolve(__dirname,'./build' )));
const port = process.env.PORT || 3000;

app.listen(port, (()=> console.log(`App run on ${port} 🎨`)));