'use strict';

var async = require('async');
module.exports = function(app) {
  //  data sources
  var mysqlDs = app.dataSources.mysqlDs;
  var Customer = app.models.Customer;
  var Right = app.models.Right;
  var CustomerRight = app.models.CustomerRight;
  var Simcard = app.models.Simcard;

  //  create models

  async.series([
    function(callback) {
      async.parallel({
        customers: async.apply(createCustomers),
        rights: async.apply(createRights) 
      }, function(err, results) {
        if (err) throw err;
        createCustomersRights(results.customers, results.rights, function(err) {
          console.log('> customer and rights created sucessfully');
          callback();
        });
      });
    },
    function(callback) {
      createSimcards(function(err) {
        if (err) return callback(err);
        console.log('> simcard created sucessfully');
        callback();
      });
    }
  ], function(err) {
    if (err) return next(err);
  });

  //  create customer
  function createCustomers(cb) {
    mysqlDs.automigrate('Customer', function(err) {
      if (err) return cb(err);

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

  //  create right
  function createRights(cb) {
    mysqlDs.automigrate('Right', function(err) {
      if (err) return cb(err);

      Right.create({
        name: 'admin',
        description: 'Administrator',
      });

      Right.create({
        name: 'user',
        description: 'Default-right',
      }, cb);
    });
  }

  //  create customerright
  function createCustomersRights(customers, rights, cb) {
    mysqlDs.automigrate('CustomerRight', function(err) {
      if (err) return cb(err);

      CustomerRight.create([{
        principalType: CustomerRight.USER,
        principalId: 1,
        roleId: 1,
      }, {
        principalType: CustomerRight.USER,
        principalId: 2,
        roleId: 2,
      }, {
        principalType: CustomerRight.USER,
        principalId: 3,
        roleId: 2,
      }], cb);
    });
  }

  //  create simcard
  function createSimcards(cb) {
    mysqlDs.automigrate('Simcard', function(err) {
      if (err) return cb(err);

      Simcard.create([{
        customerId: 1,
        imei: 'IMEI1234567890',
        number: '+36-20-222-7326',
      }, {
        customerId: 2,
        imei: 'IMEI1234567890',
        number: '+36-30-111-7326',       
      }], cb);
    });
  }

};
