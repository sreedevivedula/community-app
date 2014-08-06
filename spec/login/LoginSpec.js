var loginpage = require('../pages/LoginPage'),
    homepage = require('../pages/HomePage'),
    test = require("selenium-webdriver/testing"),
    logindata = require('../data/LoginData'),
    expect = require('chai').use(require('chai-as-promised')).expect;


test.describe("MIFOSX Login Page", function() {

    beforeEach("Open Login Page", function() {
        loginpage.openLoginPage();
    });

    test.it("Should login admin user", function() {
        loginpage.validLogin(logindata.adminUsername, logindata.adminPassword);
        expect(homepage.getMifosXLogo().isDisplayed()).to.eventually.equal(true);
    });

    test.it("Should throw an error when invalid credentials are provided", function() {
        loginpage.invalidLogin(logindata.invalidUsername, logindata.invalidPassword);
        expect(loginpage.getInvalidLoginError().isDisplayed()).to.eventually.equal(true);
    });

    afterEach("Logout", function() {
        homepage.navbar.logout();
    })
});