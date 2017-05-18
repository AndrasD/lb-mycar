'use strict';

var async = require('async');
module.exports = function(app) {
  //data sources
  var mysqlDs = app.dataSources.mysqlDs;
  var Customer = app.models.Customer;
  var Right = app.models.Right;
  var CustomerRight = app.models.CustomerRight;

  //create all models
  async.parallel({
       customers: async.apply(createCustomers),
       functions: async.apply(createRights),
  }, function(err, results) {
    if (err) throw err;
    createCustomersRights(results.customers, results.rights, function(err) {
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
  function createRights(cb) {
    mysqlDs.automigrate('Right', function(err) {
      if (err) return cb(err);

      Right.create({
        name: 'admin',
        description: 'Administrator'
      });

      Right.create({   
        name: 'user',
        description: 'Default-right'        
      }, cb);
    });
  }

  //create reviews
  function createCustomersRights(customers, rights, cb) {
    mysqlDs.automigrate('CustomerRight', function(err) {
      if (err) return cb(err);

      CustomerRight.create([{
        principalType: CustomerRight.USER,
        principalId: 1,
        roleId: 1    
      }, {   
        principalType: CustomerRight.USER,
        principalId: 2,
        roleId: 2    
      }, {   
        principalType: CustomerRight.USER,
        principalId: 3,
        roleId: 2    
      }], cb);
    });
  }  
};
