const express = require('express');
const path = require('path');   
const app = express();

// setup views, static files, routes, etc.
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

// import router from index.js
const indexRouter = require('./routes/index');

// mount router
app.use('/', indexRouter);


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
