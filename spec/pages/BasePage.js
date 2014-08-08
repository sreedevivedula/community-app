var config = require('../config/MifosxConfig'),
    webdriver = require('selenium-webdriver'),
    _ = require('../../app/bower_components/underscore');


var BasePage = function() {
    if ( arguments.callee._singletonInstance )
        return arguments.callee._singletonInstance;
    arguments.callee._singletonInstance = this;

    this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    this.by = webdriver.By;
    this.config = config;
};

BasePage.prototype.create = function(page) {
    return _.extend(page, this);
};

BasePage.prototype.openLoginPage = function(page) {
    this.driver.get(this.config.baseURL);
}

BasePage.prototype.waitForElement = function(locator, timeout) {
    var driver = this.driver;
    var by = this.by;

    driver.wait(function() {
        return driver.findElement(locator).then(function(element) {
            return element.isDisplayed();
        });
    }, timeout || this.config.PAGE_LOAD_TIMEOUT);
}

module.exports = new BasePage();