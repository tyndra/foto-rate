var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;


var routes = require('./api/routes/fotoRateRoutes'); //importing route
routes(app); //register the route

app.use(express.static('./public'));

app.listen(port);

console.log('foto rate RESTful API server started on: ' + port);