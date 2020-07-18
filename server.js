const express= require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const app = express();

//Bodyparser middleware

app.use(express.json());

//db Config
const db= config.get('mongoURI');

//Connect to Mongo
mongoose
    .connect(db,{
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(()=>console.log('MongoDB connected...'))
    .catch(err => console.log(err));

//Use routes

app.use('/api/Items',require('./routes/api/Items'));
app.use('/api/Users',require('./routes/api/Users'));
app.use('/api/auth',require('./routes/api/auth'));

//Serve static assets if we are in production
if(process.env.node_env === 'production'){
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*',(req,res)=> {
        res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server started on ${port}`));
