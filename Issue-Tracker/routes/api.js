/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

var expect = require("chai").expect;
// var MongoClient = require("mongodb");
// var ObjectId = require("mongodb").ObjectID;

module.exports = function(app) {
  app
    .route("/api/issues/:project")

    .get(function(req, res) {
      var project = req.params.project;
    })

    .post(function(req, res) {
      var project = req.params.project;
    })

    .put(function(req, res) {
      var project = req.params.project;
    })

    .delete(function(req, res) {
      var project = req.params.project;
    });

  app.route("/report-xss-violation").get((req, res) => {
    res.send("We have a xss violation");
  });
};
