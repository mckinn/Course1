
const logger = require('./logger').logthis;
const courses = require('./courses');

const startupDebugger = require('debug')('app:startup'); // create a namespace for a collection of logs
const databaseDebugger = require('debug')('app:database');

const config = require('config');
const express = require('express');
const Joi = require('joi');
const helmet = require ('helmet');
const morgan = require ('morgan');
const app = express();
const

app.set('view engine', 'pug');
app.set('views', './views');  //default

startupDebugger(`NODE_ENV: ${process.env.NODE_ENV}`);
startupDebugger(`env variable ${app.get('env')}`);
startupDebugger('Application Name ', config.get('name'));
startupDebugger('Mail Server ' + config.get('mail.host'));
startupDebugger('Mail Password ' + config.get('mail.password'));

app.use(express.json());  // middleware function transmutes body to the target format
                          // transmutation happens at the beginning of the chain.
app.use(helmet());
app.use(express.static('public'));         
app.use(logger);  // results from the custom module
app.use('/api/courses',courses);

if (app.get('env') === 'development') {
    app.use(morgan('tiny')); 
    console.log('Morgan enabled...');
 }

app.use(function (req,res, next){
    console.log('Authenticating...');
    next();    // call the next event.
});


app.get('/', (req, res) => {
    res.render('index',   // the name of the pug template file
    { title:"my express app", message:"hello"});
});



// using an environment variable called PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`listening on port ${port}`)});
