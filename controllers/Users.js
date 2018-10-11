'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.createUser = function createUser (req, res, next) {
  var user = req.swagger.params['user'].value;
  Users.createUser(user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUser = function deleteUser (req, res, next) {
  var id = req.swagger.params['id'].value;
  Users.deleteUser(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findUsers = function findUsers (req, res, next) {
  var email = req.swagger.params['email'].value;
  var name = req.swagger.params['name'].value;
  Users.findUsers(email,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readUser = function readUser (req, res, next) {
  var id = req.swagger.params['id'].value;
  Users.readUser(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUser = function updateUser (req, res, next) {
  var id = req.swagger.params['id'].value;
  var user = req.swagger.params['user'].value;
  Users.updateUser(id,user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
