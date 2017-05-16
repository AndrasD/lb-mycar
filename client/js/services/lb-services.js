// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }
  // need to use the urlBase as the base to handle multiple
  // loopback servers behind a proxy/gateway where the host
  // would be the same.
  var urlBaseHost = getHost(urlBase) ? urlBase : location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Customer
 * @header lbServices.Customer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Customer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Customer",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Customers/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__findById__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Customer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__destroyById__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Customer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__updateById__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Customer id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.customerFunction.findById() instead.
            "prototype$__findById__customerFunction": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/customerFunction/:fk",
              method: "GET",
            },

            // INTERNAL. Use Customer.customerFunction.destroyById() instead.
            "prototype$__destroyById__customerFunction": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/customerFunction/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.customerFunction.updateById() instead.
            "prototype$__updateById__customerFunction": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/customerFunction/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.customerFunction.link() instead.
            "prototype$__link__customerFunction": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/customerFunction/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.customerFunction.unlink() instead.
            "prototype$__unlink__customerFunction": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/customerFunction/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.customerFunction.exists() instead.
            "prototype$__exists__customerFunction": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/customerFunction/rel/:fk",
              method: "HEAD",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__get__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Queries accessTokens of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Customer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Customers/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__create__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Customer id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Customers/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__delete__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Customer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Customers/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__count__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Counts accessTokens of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Customer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Customers/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use Customer.customerFunction() instead.
            "prototype$__get__customerFunction": {
              isArray: true,
              url: urlBase + "/Customers/:id/customerFunction",
              method: "GET",
            },

            // INTERNAL. Use Customer.customerFunction.create() instead.
            "prototype$__create__customerFunction": {
              url: urlBase + "/Customers/:id/customerFunction",
              method: "POST",
            },

            // INTERNAL. Use Customer.customerFunction.destroyAll() instead.
            "prototype$__delete__customerFunction": {
              url: urlBase + "/Customers/:id/customerFunction",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.customerFunction.count() instead.
            "prototype$__count__customerFunction": {
              url: urlBase + "/Customers/:id/customerFunction/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#create
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Customers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#createMany
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Customers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#patchOrCreate
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Customers",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#replaceOrCreate
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Customers/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#upsertWithWhere
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Customers/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#exists
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Customers/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#findById
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Customers/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#replaceById
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Customers/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#find
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Customers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#findOne
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Customers/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#updateAll
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Customers/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#deleteById
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Customers/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#count
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Customers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$patchAttributes
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Customer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Customers/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#createChangeStream
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Customers/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#login
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Customers/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#logout
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string=}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Customers/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$verify
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Trigger user's identity verification with configured verifyOptions
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Customer id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `verifyOptions` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$verify": {
              url: urlBase + "/Customers/:id/verify",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#confirm
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Confirm a user registration with identity verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Customers/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#resetPassword
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Customers/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#changePassword
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Change a user's password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `oldPassword` – `{string}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "changePassword": {
              url: urlBase + "/Customers/change-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#setPassword
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Reset user's password via a password-reset token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "setPassword": {
              url: urlBase + "/Customers/reset-password",
              method: "POST",
            },

            // INTERNAL. Use Function.functionCustomer.findById() instead.
            "::findById::Function::functionCustomer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Functions/:id/functionCustomer/:fk",
              method: "GET",
            },

            // INTERNAL. Use Function.functionCustomer.destroyById() instead.
            "::destroyById::Function::functionCustomer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Functions/:id/functionCustomer/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Function.functionCustomer.updateById() instead.
            "::updateById::Function::functionCustomer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Functions/:id/functionCustomer/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Function.functionCustomer.link() instead.
            "::link::Function::functionCustomer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Functions/:id/functionCustomer/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Function.functionCustomer.unlink() instead.
            "::unlink::Function::functionCustomer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Functions/:id/functionCustomer/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Function.functionCustomer.exists() instead.
            "::exists::Function::functionCustomer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Functions/:id/functionCustomer/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Function.functionCustomer() instead.
            "::get::Function::functionCustomer": {
              isArray: true,
              url: urlBase + "/Functions/:id/functionCustomer",
              method: "GET",
            },

            // INTERNAL. Use Function.functionCustomer.create() instead.
            "::create::Function::functionCustomer": {
              url: urlBase + "/Functions/:id/functionCustomer",
              method: "POST",
            },

            // INTERNAL. Use Function.functionCustomer.createMany() instead.
            "::createMany::Function::functionCustomer": {
              isArray: true,
              url: urlBase + "/Functions/:id/functionCustomer",
              method: "POST",
            },

            // INTERNAL. Use Function.functionCustomer.destroyAll() instead.
            "::delete::Function::functionCustomer": {
              url: urlBase + "/Functions/:id/functionCustomer",
              method: "DELETE",
            },

            // INTERNAL. Use Function.functionCustomer.count() instead.
            "::count::Function::functionCustomer": {
              url: urlBase + "/Functions/:id/functionCustomer/count",
              method: "GET",
            },

            // INTERNAL. Use CustomerFunction.customer() instead.
            "::get::CustomerFunction::customer": {
              url: urlBase + "/CustomerFunctions/:id/customer",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#getCurrent
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Customers" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Customer#upsert
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Customer#updateOrCreate
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Customer#patchOrCreateWithWhere
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Customer#update
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Customer#destroyById
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Customer#removeById
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$updateAttributes
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Customer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.Customer#getCachedCurrent
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Customer#login} or
         * {@link lbServices.Customer#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Customer instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer#isAuthenticated
         * @methodOf lbServices.Customer
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer#getCurrentId
         * @methodOf lbServices.Customer
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.Customer#modelName
        * @propertyOf lbServices.Customer
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Customer`.
        */
        R.modelName = "Customer";

    /**
     * @ngdoc object
     * @name lbServices.Customer.customerFunction
     * @header lbServices.Customer.customerFunction
     * @object
     * @description
     *
     * The object `Customer.customerFunction` groups methods
     * manipulating `Function` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#customerFunction Customer.customerFunction()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Customer#customerFunction
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Queries customerFunction of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Customer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
        R.customerFunction = function() {
          var TargetResource = $injector.get("Function");
          var action = TargetResource["::get::Customer::customerFunction"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.customerFunction#count
             * @methodOf lbServices.Customer.customerFunction
             *
             * @description
             *
             * Counts customerFunction of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Customer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.customerFunction.count = function() {
          var TargetResource = $injector.get("Function");
          var action = TargetResource["::count::Customer::customerFunction"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.customerFunction#create
             * @methodOf lbServices.Customer.customerFunction
             *
             * @description
             *
             * Creates a new instance in customerFunction of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Customer id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
        R.customerFunction.create = function() {
          var TargetResource = $injector.get("Function");
          var action = TargetResource["::create::Customer::customerFunction"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.customerFunction#createMany
             * @methodOf lbServices.Customer.customerFunction
             *
             * @description
             *
             * Creates a new instance in customerFunction of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Customer id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
        R.customerFunction.createMany = function() {
          var TargetResource = $injector.get("Function");
          var action = TargetResource["::createMany::Customer::customerFunction"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.customerFunction#destroyAll
             * @methodOf lbServices.Customer.customerFunction
             *
             * @description
             *
             * Deletes all customerFunction of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Customer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.customerFunction.destroyAll = function() {
          var TargetResource = $injector.get("Function");
          var action = TargetResource["::delete::Customer::customerFunction"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.customerFunction#destroyById
             * @methodOf lbServices.Customer.customerFunction
             *
             * @description
             *
             * Delete a related item by id for customerFunction.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Customer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for customerFunction
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.customerFunction.destroyById = function() {
          var TargetResource = $injector.get("Function");
          var action = TargetResource["::destroyById::Customer::customerFunction"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.customerFunction#exists
             * @methodOf lbServices.Customer.customerFunction
             *
             * @description
             *
             * Check the existence of customerFunction relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Customer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for customerFunction
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
        R.customerFunction.exists = function() {
          var TargetResource = $injector.get("Function");
          var action = TargetResource["::exists::Customer::customerFunction"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.customerFunction#findById
             * @methodOf lbServices.Customer.customerFunction
             *
             * @description
             *
             * Find a related item by id for customerFunction.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Customer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for customerFunction
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
        R.customerFunction.findById = function() {
          var TargetResource = $injector.get("Function");
          var action = TargetResource["::findById::Customer::customerFunction"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.customerFunction#link
             * @methodOf lbServices.Customer.customerFunction
             *
             * @description
             *
             * Add a related item by id for customerFunction.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Customer id
             *
             *  - `fk` – `{*}` - Foreign key for customerFunction
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
        R.customerFunction.link = function() {
          var TargetResource = $injector.get("Function");
          var action = TargetResource["::link::Customer::customerFunction"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.customerFunction#unlink
             * @methodOf lbServices.Customer.customerFunction
             *
             * @description
             *
             * Remove the customerFunction relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Customer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for customerFunction
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.customerFunction.unlink = function() {
          var TargetResource = $injector.get("Function");
          var action = TargetResource["::unlink::Customer::customerFunction"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.customerFunction#updateById
             * @methodOf lbServices.Customer.customerFunction
             *
             * @description
             *
             * Update a related item by id for customerFunction.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Customer id
             *
             *  - `fk` – `{*}` - Foreign key for customerFunction
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
        R.customerFunction.updateById = function() {
          var TargetResource = $injector.get("Function");
          var action = TargetResource["::updateById::Customer::customerFunction"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Function
 * @header lbServices.Function
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Function` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Function",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Functions/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Function#prototype$__findById__principals
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Find a related item by id for principals.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Function id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for principals
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
            "prototype$__findById__principals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Functions/:id/principals/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Function#prototype$__destroyById__principals
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Delete a related item by id for principals.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Function id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for principals
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__principals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Functions/:id/principals/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Function#prototype$__updateById__principals
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Update a related item by id for principals.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Function id
             *
             *  - `fk` – `{*}` - Foreign key for principals
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
            "prototype$__updateById__principals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Functions/:id/principals/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Function.functionCustomer.findById() instead.
            "prototype$__findById__functionCustomer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Functions/:id/functionCustomer/:fk",
              method: "GET",
            },

            // INTERNAL. Use Function.functionCustomer.destroyById() instead.
            "prototype$__destroyById__functionCustomer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Functions/:id/functionCustomer/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Function.functionCustomer.updateById() instead.
            "prototype$__updateById__functionCustomer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Functions/:id/functionCustomer/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Function.functionCustomer.link() instead.
            "prototype$__link__functionCustomer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Functions/:id/functionCustomer/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Function.functionCustomer.unlink() instead.
            "prototype$__unlink__functionCustomer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Functions/:id/functionCustomer/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Function.functionCustomer.exists() instead.
            "prototype$__exists__functionCustomer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Functions/:id/functionCustomer/rel/:fk",
              method: "HEAD",
            },

            /**
             * @ngdoc method
             * @name lbServices.Function#prototype$__get__principals
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Queries principals of Function.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Function id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
            "prototype$__get__principals": {
              isArray: true,
              url: urlBase + "/Functions/:id/principals",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Function#prototype$__create__principals
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Creates a new instance in principals of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Function id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
            "prototype$__create__principals": {
              url: urlBase + "/Functions/:id/principals",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Function#prototype$__delete__principals
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Deletes all principals of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Function id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__principals": {
              url: urlBase + "/Functions/:id/principals",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Function#prototype$__count__principals
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Counts principals of Function.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Function id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__principals": {
              url: urlBase + "/Functions/:id/principals/count",
              method: "GET",
            },

            // INTERNAL. Use Function.functionCustomer() instead.
            "prototype$__get__functionCustomer": {
              isArray: true,
              url: urlBase + "/Functions/:id/functionCustomer",
              method: "GET",
            },

            // INTERNAL. Use Function.functionCustomer.create() instead.
            "prototype$__create__functionCustomer": {
              url: urlBase + "/Functions/:id/functionCustomer",
              method: "POST",
            },

            // INTERNAL. Use Function.functionCustomer.destroyAll() instead.
            "prototype$__delete__functionCustomer": {
              url: urlBase + "/Functions/:id/functionCustomer",
              method: "DELETE",
            },

            // INTERNAL. Use Function.functionCustomer.count() instead.
            "prototype$__count__functionCustomer": {
              url: urlBase + "/Functions/:id/functionCustomer/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Function#create
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Functions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Function#createMany
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Functions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Function#patchOrCreate
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Functions",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Function#replaceOrCreate
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Functions/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Function#upsertWithWhere
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Functions/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Function#exists
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Functions/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Function#findById
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Functions/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Function#replaceById
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Functions/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Function#find
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Functions",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Function#findOne
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Functions/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Function#updateAll
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Functions/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Function#deleteById
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Functions/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Function#count
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Functions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Function#prototype$patchAttributes
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Function id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Functions/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Function#createChangeStream
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Functions/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Customer.customerFunction.findById() instead.
            "::findById::Customer::customerFunction": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/customerFunction/:fk",
              method: "GET",
            },

            // INTERNAL. Use Customer.customerFunction.destroyById() instead.
            "::destroyById::Customer::customerFunction": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/customerFunction/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.customerFunction.updateById() instead.
            "::updateById::Customer::customerFunction": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/customerFunction/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.customerFunction.link() instead.
            "::link::Customer::customerFunction": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/customerFunction/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.customerFunction.unlink() instead.
            "::unlink::Customer::customerFunction": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/customerFunction/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.customerFunction.exists() instead.
            "::exists::Customer::customerFunction": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/customerFunction/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Customer.customerFunction() instead.
            "::get::Customer::customerFunction": {
              isArray: true,
              url: urlBase + "/Customers/:id/customerFunction",
              method: "GET",
            },

            // INTERNAL. Use Customer.customerFunction.create() instead.
            "::create::Customer::customerFunction": {
              url: urlBase + "/Customers/:id/customerFunction",
              method: "POST",
            },

            // INTERNAL. Use Customer.customerFunction.createMany() instead.
            "::createMany::Customer::customerFunction": {
              isArray: true,
              url: urlBase + "/Customers/:id/customerFunction",
              method: "POST",
            },

            // INTERNAL. Use Customer.customerFunction.destroyAll() instead.
            "::delete::Customer::customerFunction": {
              url: urlBase + "/Customers/:id/customerFunction",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.customerFunction.count() instead.
            "::count::Customer::customerFunction": {
              url: urlBase + "/Customers/:id/customerFunction/count",
              method: "GET",
            },

            // INTERNAL. Use CustomerFunction.function() instead.
            "::get::CustomerFunction::function": {
              url: urlBase + "/CustomerFunctions/:id/function",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Function#upsert
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Function#updateOrCreate
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Function#patchOrCreateWithWhere
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Function#update
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Function#destroyById
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Function#removeById
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Function#prototype$updateAttributes
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Function id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Function#modelName
        * @propertyOf lbServices.Function
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Function`.
        */
        R.modelName = "Function";

    /**
     * @ngdoc object
     * @name lbServices.Function.functionCustomer
     * @header lbServices.Function.functionCustomer
     * @object
     * @description
     *
     * The object `Function.functionCustomer` groups methods
     * manipulating `Customer` instances related to `Function`.
     *
     * Call {@link lbServices.Function#functionCustomer Function.functionCustomer()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Function#functionCustomer
             * @methodOf lbServices.Function
             *
             * @description
             *
             * Queries functionCustomer of Function.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Function id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.functionCustomer = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Function::functionCustomer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Function.functionCustomer#count
             * @methodOf lbServices.Function.functionCustomer
             *
             * @description
             *
             * Counts functionCustomer of Function.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Function id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.functionCustomer.count = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::count::Function::functionCustomer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Function.functionCustomer#create
             * @methodOf lbServices.Function.functionCustomer
             *
             * @description
             *
             * Creates a new instance in functionCustomer of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Function id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.functionCustomer.create = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::create::Function::functionCustomer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Function.functionCustomer#createMany
             * @methodOf lbServices.Function.functionCustomer
             *
             * @description
             *
             * Creates a new instance in functionCustomer of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Function id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.functionCustomer.createMany = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::createMany::Function::functionCustomer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Function.functionCustomer#destroyAll
             * @methodOf lbServices.Function.functionCustomer
             *
             * @description
             *
             * Deletes all functionCustomer of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Function id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.functionCustomer.destroyAll = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::delete::Function::functionCustomer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Function.functionCustomer#destroyById
             * @methodOf lbServices.Function.functionCustomer
             *
             * @description
             *
             * Delete a related item by id for functionCustomer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Function id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for functionCustomer
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.functionCustomer.destroyById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::destroyById::Function::functionCustomer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Function.functionCustomer#exists
             * @methodOf lbServices.Function.functionCustomer
             *
             * @description
             *
             * Check the existence of functionCustomer relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Function id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for functionCustomer
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.functionCustomer.exists = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::exists::Function::functionCustomer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Function.functionCustomer#findById
             * @methodOf lbServices.Function.functionCustomer
             *
             * @description
             *
             * Find a related item by id for functionCustomer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Function id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for functionCustomer
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.functionCustomer.findById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::findById::Function::functionCustomer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Function.functionCustomer#link
             * @methodOf lbServices.Function.functionCustomer
             *
             * @description
             *
             * Add a related item by id for functionCustomer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Function id
             *
             *  - `fk` – `{*}` - Foreign key for functionCustomer
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.functionCustomer.link = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::link::Function::functionCustomer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Function.functionCustomer#unlink
             * @methodOf lbServices.Function.functionCustomer
             *
             * @description
             *
             * Remove the functionCustomer relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Function id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for functionCustomer
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.functionCustomer.unlink = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::unlink::Function::functionCustomer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Function.functionCustomer#updateById
             * @methodOf lbServices.Function.functionCustomer
             *
             * @description
             *
             * Update a related item by id for functionCustomer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Function id
             *
             *  - `fk` – `{*}` - Foreign key for functionCustomer
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.functionCustomer.updateById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::updateById::Function::functionCustomer"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.CustomerFunction
 * @header lbServices.CustomerFunction
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CustomerFunction` model.
 *
 * **Details**
 *
 * Map principals to roles
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "CustomerFunction",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/CustomerFunctions/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#prototype$__get__role
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Fetches belongsTo relation role.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CustomerFunction id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CustomerFunction` object.)
             * </em>
             */
            "prototype$__get__role": {
              url: urlBase + "/CustomerFunctions/:id/role",
              method: "GET",
            },

            // INTERNAL. Use CustomerFunction.customer() instead.
            "prototype$__get__customer": {
              url: urlBase + "/CustomerFunctions/:id/customer",
              method: "GET",
            },

            // INTERNAL. Use CustomerFunction.function() instead.
            "prototype$__get__function": {
              url: urlBase + "/CustomerFunctions/:id/function",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#create
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CustomerFunction` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/CustomerFunctions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#createMany
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CustomerFunction` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/CustomerFunctions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#patchOrCreate
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CustomerFunction` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/CustomerFunctions",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#replaceOrCreate
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CustomerFunction` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/CustomerFunctions/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#upsertWithWhere
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CustomerFunction` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/CustomerFunctions/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#exists
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/CustomerFunctions/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#findById
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CustomerFunction` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/CustomerFunctions/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#replaceById
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CustomerFunction` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/CustomerFunctions/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#find
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CustomerFunction` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/CustomerFunctions",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#findOne
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CustomerFunction` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/CustomerFunctions/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#updateAll
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/CustomerFunctions/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#deleteById
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CustomerFunction` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/CustomerFunctions/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#count
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/CustomerFunctions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#prototype$patchAttributes
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CustomerFunction id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CustomerFunction` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/CustomerFunctions/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#createChangeStream
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/CustomerFunctions/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#upsert
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CustomerFunction` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#updateOrCreate
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CustomerFunction` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#patchOrCreateWithWhere
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CustomerFunction` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#update
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#destroyById
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CustomerFunction` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#removeById
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CustomerFunction` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#prototype$updateAttributes
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CustomerFunction id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CustomerFunction` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.CustomerFunction#modelName
        * @propertyOf lbServices.CustomerFunction
        * @description
        * The name of the model represented by this $resource,
        * i.e. `CustomerFunction`.
        */
        R.modelName = "CustomerFunction";


            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#customer
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Fetches belongsTo relation customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CustomerFunction id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.customer = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::CustomerFunction::customer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CustomerFunction#function
             * @methodOf lbServices.CustomerFunction
             *
             * @description
             *
             * Fetches belongsTo relation function.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CustomerFunction id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Function` object.)
             * </em>
             */
        R.function = function() {
          var TargetResource = $injector.get("Function");
          var action = TargetResource["::get::CustomerFunction::function"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && config.url.indexOf(urlBaseHost) === -1) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
