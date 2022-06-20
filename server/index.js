require('express-async-errors');
const express = require('express');
const mongoose = require('mongoose');
//const ExampleDataFormation = require('./utils/updatedata/index.js')
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const RouterFns = require('./routes/index.js');

// ROUTER AND APP IMPORT
const app = express();
const router = express.Router();

// ROUTER ARRAY
RouterFns.forEach((routerFn, index) => {
  routerFn(router);
});

//CONFIGURE SETTINGS SERVER
dotenv.config();
app.use(
  cors(),
  express.json({limit:'50mb'}),
  helmet(),
  express.urlencoded({
    extended: true,
    limit: '20mb',
  })
);

//ROUTER CALL
app.use('/api', router);

// MONGO DB CONNECT
mongoose
  .connect(process.env.MONGO_DB_URI)
  .catch(err => {
    console.log(err);
  });

//START SERVER
app.listen(5000, () => {
  console.log('Server Running');
});
