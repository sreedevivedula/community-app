var webdriver = require('selenium-webdriver');
var myStepDefinitionsWrapper = function () {
    this.World = require("../support/world.js").World; // overwrite default World constructor

    this.Given(/^I am logged into MIFOSX as a "([^"]*)"$/, function(user, callback) {
        console.log("This.Driver="+this.driver)
        driver = this.driver;
        driver.get('localhost:9000/?baseApiUrl=https://demo.openmf.org');
        driver.wait(function() {
            return driver.findElement(webdriver.By.id('uid')).isDisplayed().then(function(value) {
                return value == true;
            });
        }, 10000);
        username = "mifos";
        password = "password";
        if (user == "mifos_admin") {
            username = "mifos";
            password = "password";
        }
        driver.findElement(webdriver.By.id('uid')).sendKeys(username);
        driver.findElement(webdriver.By.id('pwd')).sendKeys(password);
        driver.findElement(webdriver.By.id('login-button')).click();
        driver.wait(function() {
            return driver.findElement(webdriver.By.id('search')).isDisplayed().then(function(value) {
                return value == true;
            });
        }, 10000).then(function() {
            callback();
        });
    });

    this.Given(/^I create a client "([^"]*)"$/, function (arg1, callback) {
        console.log("Hello World");
        callback.pending();
    });

    this.When(/^I go to the README file$/, function(callback) {
        // Express the regexp above with the code you wish you had. Call callback() at the end
        // of the step, or callback.pending() if the step is not yet implemented:

        callback.pending();
    });

    this.Then(/^I should see "(.*)" as the page title$/, function(title, callback) {
        // matching groups are passed as parameters to the step definition

        var pageTitle = this.browser.text('title');
        if (title === pageTitle) {
            callback();
        } else {
            callback.fail(new Error("Expected to be on page with title " + title));
        }
    });
};

module.exports = myStepDefinitionsWrapper;