/*jslint node: true */
/*global driver: false */
/*global by: false */

(function () {
    'use strict';

    var Page = require('./BasePage'),
        homePageNavBar = require('./HomePageNavBar'),
        homepage = Page.create({

            // Page Elements
            navbar: homePageNavBar,

            // Page Services
            waitForLoad: function () {
                return this.waitForElement(by.id("main"));
            },

            isDisplayed: function () {
                this.waitForLoad().then(null, function(error) {
                    return false;
                });
                return driver.findElement(by.id("main")).isDisplayed();
            }

        });
    module.exports = homepage;
}());