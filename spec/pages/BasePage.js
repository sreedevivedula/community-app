/*jslint node: true */
/*global driver: false */
/*global by: false */


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

            global.driver = driverConfig.driver;
            global.by = driverConfig.by;
            this.appConfig = appConfig;
        };

    BasePage.prototype.create = function (page) {
        return underscore.extend(page, this);
    };

    BasePage.prototype.waitForElement = function (locator, timeout,
                                                  timeout_msg) {

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

