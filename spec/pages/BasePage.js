/*jslint node: true */

(function () {
    'use strict';

    var appConfig = require('../config/MifosxConfig'),
        driverConfig = require('../config/DriverConfig'),
        underscore = require('../../app/bower_components/underscore'),
        BasePage = function () {
            if (this.singleton) {
                return this.singleton;
            }
            this.singleton = this;

            this.driver = driverConfig.driver;
            this.by = driverConfig.by;
            this.appConfig = appConfig;
        };

    BasePage.prototype.create = function (page) {
        return underscore.extend(page, this);
    };

    BasePage.prototype.openLoginPage = function () {
        this.driver.get(this.appConfig.baseURL);
        console.log(this.driver.window);
    };

    BasePage.prototype.waitForElement = function (locator, timeout, timeout_msg) {
        var driver = this.driver;

        return driver.wait(function () {
            return driver.findElement(locator).then(function (element) {
                return element.isDisplayed();
            });
        },  timeout || this.appConfig.PAGE_LOAD_TIMEOUT,
            timeout_msg || "Could not find element with locator using " +
            locator.using + " and value " + locator.value);
    };

    module.exports = new BasePage();

}());

