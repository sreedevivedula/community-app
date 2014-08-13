/*jslint node: true*/

var loginpage = require('../pages/LoginPage'),
    homepage = require('../pages/HomePage'),
    test = require("selenium-webdriver/testing"),
    logindata = require('../data/LoginData'),
    expect = require('chai').use(require('chai-as-promised')).expect;


test.describe("MIFOSX Login Page", function() {
    'use strict';

    test.beforeEach("Open Login Page", function() {
        loginpage.openLoginPage();
    });

    test.it("Should login admin user", function() {
        loginpage.login(logindata.adminUsername, logindata.adminPassword);
        homepage.waitForLoad();
        expect(homepage.isDisplayed()).to.eventually.equal(true);
    });

    test.it("Should throw an error when invalid credentials are provided", function() {
        loginpage.login(logindata.invalidUsername, logindata.invalidPassword);
        //To Fix
        loginpage.waitForLoad();
        expect(loginpage.getInvalidLoginError().isDisplayed()).to.eventually.equal(true);
    });

    test.afterEach("Logout", function() {
        homepage.isDisplayed().then(function(result) {
            if (result) {
                homepage.navbar.logout() ;
            }
        });
    });
});