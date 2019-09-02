const express = require('express');
const mongoose = require('mongoose');
//app
const app = express();
require('dotenv').config();

const userRoutes = require('./routes/user');

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser : true,
    useCreateIndex : true
}).then(()=> console.log("DB connected"));

//routes middleware
app.use("/api", userRoutes);



const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

