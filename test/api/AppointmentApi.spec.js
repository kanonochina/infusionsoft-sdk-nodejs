/**
 * Infusionsoft REST API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: V1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.InfusionsoftRestApi);
  }
}(this, function(expect, InfusionsoftRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new InfusionsoftRestApi.AppointmentApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AppointmentApi', function() {
    describe('appointmentsUsingGET', function() {
      it('should call appointmentsUsingGET successfully', function(done) {
        //uncomment below and update the code to test appointmentsUsingGET
        //instance.appointmentsUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAppointmentUsingPOST', function() {
      it('should call createAppointmentUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createAppointmentUsingPOST
        //instance.createAppointmentUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('loadAppointmentUsingGET', function() {
      it('should call loadAppointmentUsingGET successfully', function(done) {
        //uncomment below and update the code to test loadAppointmentUsingGET
        //instance.loadAppointmentUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeAppointmentUsingDELETE', function() {
      it('should call removeAppointmentUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test removeAppointmentUsingDELETE
        //instance.removeAppointmentUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAppointmentUsingPUT', function() {
      it('should call replaceAppointmentUsingPUT successfully', function(done) {
        //uncomment below and update the code to test replaceAppointmentUsingPUT
        //instance.replaceAppointmentUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchUsingGET', function() {
      it('should call searchUsingGET successfully', function(done) {
        //uncomment below and update the code to test searchUsingGET
        //instance.searchUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('syncUsingGET', function() {
      it('should call syncUsingGET successfully', function(done) {
        //uncomment below and update the code to test syncUsingGET
        //instance.syncUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAppointmentUsingPATCH', function() {
      it('should call updateAppointmentUsingPATCH successfully', function(done) {
        //uncomment below and update the code to test updateAppointmentUsingPATCH
        //instance.updateAppointmentUsingPATCH(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
