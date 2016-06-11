  var   express = require('express'),
       app = express(),
       bodyParser = require('body-parser'),
       cors = require('cors'),
       mongoose = require('mongoose'),
       port = process.env.PORT || 8181,
       mongoUri = 'mongodb://localhost:27017/',
       router = express.Router();

  app.use(bodyParser.json());
  app.use(cors());
  app.use(express.static(__dirname + '/www'));
  app.use('/api', router);

  //begin router.routes

  mongoose.connect(mongoUri);
  mongoose.connection.once('open', function() {
      console.log('Connected to MongoDB at ' + mongoUri);
  });


  app.listen(port, function() {
      console.log('Listening on ' + port);
  });
