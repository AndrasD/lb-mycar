'use strict';

module.exports = function(Customer) {

    Customer.remoteMethod('insert', 
    {
        description: 'Save a new customer and authirization (transaction).',
        accepts: [
          {arg: 'email', type: 'string', required: true},
          {arg: 'password', type: 'string', required: true},
          {arg: 'username', type: 'string', required: false},
          {arg: 'right', type: 'object', required: true},
        ],
        returns: {arg: 'insert', type: 'object'},
        http: {path: '/insert', verb: 'post'}
    });
};
