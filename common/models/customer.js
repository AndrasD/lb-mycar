'use strict';

module.exports = function(Customer) {

    Customer.insert = function(data, cb) {
        // ellenőrzéseket betenni
        var customerInstance;
        var rightInstance;

        Customer.beginTransaction('READ COMMITTED', function(err, tx) {
            Customer.create({email: data.email, password: data.password, username: data.username}, {transaction: tx})
            .then(function(response) {
                if(response) {
                    tx.commit(function(err){});
                    return response;
//                    return CustomerRight.create({principalType: CustomerRight.USER, principalId: instance.id, roleId: data.rightId}, {transaction: tx});
                } else {
                    throw ({message: "Customer.create unsuccessfull", status: 400});
                }
            })
/*            .then(function(instance) {
                if(instance) {
                    tx.commit(function(err){});
                } else {
                    throw ({message: "CustomerRight.create unsuccessfull", status: 400});                    
                }
            })
*/            .catch(function(err) {
                tx.rollback(function(err){});
            });
        });
    }

    Customer.remoteMethod('insert', 
    {
        description: 'Save a new customer and authorization (transaction).',
        http: {path: '/insert', verb: 'post'},
        accepts: [
            {arg: 'data', type: 'object', http: { source: 'body' }}
        ],
        returns: {arg: 'insert', type: 'Customer', root: true}
    });
};
