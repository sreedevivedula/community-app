/*jslint node: true*/

var homepage = require('../pages/HomePage'),
    loginpage = require('../pages/LoginPage'),
    test = require("selenium-webdriver/testing"),
    logindata = require('../data/LoginData'),
    clientdata = require('../data/ClientData'),
    expect = require('chai').use(require('chai-as-promised')).expect;


test.describe("MIFOSX Clients Page", function() {
    'use strict';

    test.beforeEach("Open Clients Page", function() {
        loginpage.openLoginPage();
        loginpage.login(logindata.adminUsername, logindata.adminPassword);
        homepage.navbar.getClientsDropDown().openClients();
    });

    test.it("Should create a client with valid information", function() {
        homepage.clientsContainer.createClient(clientdata);
        var searchResults = homepage.clientsContainer.clientsList.search(clientdata.firstName);

    });

    test.afterEach("Delete Client", function() {

    });

    test.afterEach("Logout", function() {

    });
});