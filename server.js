// const express = require('express');
// const fs = require('fs');
// const postgres = require('postgres.js');

// const db = new postgres.Database(filebuffer);

// const app = express();

// app.set('port', (process.env.PORT || 3001));

// // Express only serves static assets in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }


// app.listen(app.get('port'), () => {
//   console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
// });

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 8080);