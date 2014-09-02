/*jslint node: true */

(function () {
    'use strict';

    var webdriver = require('selenium-webdriver'),
        driver,
        driverConfig;

    driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    driver.manage().window().maximize();

    driverConfig = {

        driver: driver,
        by: webdriver.By

    };

    module.exports = driverConfig;

}());