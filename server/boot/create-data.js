'use strict';

var async = require('async');
module.exports = function(app) {
  //data sources
  var mysqlDs = app.dataSources.mysqlDs;
  //create all models
  async.parallel({customers: async.apply(createCustomers),}, function(err, results) {
    if (err) throw err;
    console.log('> models created sucessfully');
  });

  //create reviewers
  function createCustomers(cb) {
    mysqlDs.automigrate('customer', function(err) {
      if (err) return cb(err);
      
      var Customer = app.models.Customer;

      Customer.create([{
        email: 'foo@bar.com',
        password: 'foobar',
        username: 'FooBar',
      }, {
        email: 'john@doe.com',
        password: 'johndoe',
        username: 'JohnDoe',
      }, {
        email: 'jane@doe.com',
        password: 'janedoe',
        username: 'JaneDoe',
      }], cb);
    });
  }
};
