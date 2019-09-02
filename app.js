const express = require('express');
const mongoose = require('mongoose');
//app
const app = express();
require('dotenv').config();

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser : true,
    useCreateIndex : true
}).then(()=> console.log("DB connected"));

app.get('/', (req, res) =>{
    res.send('Hello from node updated hahah hohoho');
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

