'use strict';

var async = require('async');
module.exports = function(app) {
  //data sources
  var mysqlDs = app.dataSources.mysqlDs;
  var Customer = app.models.Customer;
  var Function = app.models.Function;
  var CustomerFunction = app.models.CustomerFunction;

  //create all models
  async.parallel({
       customers: async.apply(createCustomers),
       functions: async.apply(createFunctions),
  }, function(err, results) {
    if (err) throw err;
    createCustomersFunctions(results.customers, results.functions, function(err) {
      console.log('> models created sucessfully');
    });
  });

  //create customer
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

  //create function
  function createFunctions(cb) {
    mysqlDs.automigrate('Function', function(err) {
      if (err) return cb(err);

      Function.create({
        name: 'admin',
        description: 'Administrator'
      }, cb);
    });
  }

  //create reviews
  function createCustomersFunctions(customers, functions, cb) {
    mysqlDs.automigrate('CustomerFunction', function(err) {
      if (err) return cb(err);

      CustomerFunction.create({
        principalType: CustomerFunction.ROLE,
        principalId: 1,
        roleId: 1     
      }, cb);
    });
  }  
};
