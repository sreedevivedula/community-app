/*jslint node: true*/

var homepage = require('../pages/HomePage'),
    test = require("selenium-webdriver/testing"),
    clientdata = require('../data/ClientData'),
    expect = require('chai').use(require('chai-as-promised')).expect;


test.describe("MIFOSX Clients Page", function() {
    'use strict';

    test.beforeEach("Open Clients Page", function() {
        homepage.navbar.openClients();
    });

    test.it("Should create a client with valid information", function() {
        homepage.createClientContainer.createClient();
    });


    test.afterEach("Logout", function() {
    });
});