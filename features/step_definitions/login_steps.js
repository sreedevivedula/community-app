var loginpage = require("../../spec/pages/LoginPage"),
    homepage = require("../../spec/pages/HomePage"),
    expect = require('chai').use(require('chai-as-promised')).expect;

var loginStepDefinitionsWrapper = function () {
    this.Given(/^I am on Login Page$/, function (callback) {
        loginpage.go().then(function(value) {
            callback();
        });
    });

    this.When(/^I try to login with the below credentials$/, function (callback) {
        loginpage.login("mifos", "password1").then(function() {
            callback();
        });
    });

    this.Then(/^I should be on the home page$/, function (callback) {
        expect(homepage.isDisplayed()).to.eventually.equal(true);
        callback();
    });
};
module.exports = loginStepDefinitionsWrapper;