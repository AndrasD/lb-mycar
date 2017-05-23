'use strict';

var async = require('async');
module.exports = function(app) {
  //  data sources
  var mysqlDs = app.dataSources.mysqlDs;
  var Coordinate = app.model.Coordinate;

  //  create all models

  async.series([
    function(callback) {
      createCoordinates(function(err) {
        if (err) return callback(err);
        console.log('> coordinate created sucessfully');
        callback();
      });
    }
  ], function(err) {
    if (err) return next(err);
  });

  //  create coordinate
  function createCoordinates(cb) {
    mysqlDs.automigrate('Coordinate', function(err) {
      if (err) return cb(err);
    });
  }

};
